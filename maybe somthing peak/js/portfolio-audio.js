/* Amirabbas portfolio voice player.
   Uses the template's existing character buttons and visual states, but owns the
   media elements itself so MP3 playback is not tied to the template's old captions. */
(function () {
  "use strict";

  var SOURCES = {
    roles: "assets/1port.mp3",
    learn: "assets/2port.mp3",
    match: "assets/3port.mp3",
    hired: "assets/4port.mp3"
  };

  // Resolve assets relative to this script, not the current route or a possible <base> tag.
  // This keeps /assets/*.mp3 correct even when the portfolio is hosted in a subdirectory.
  var scriptUrl = document.currentScript && document.currentScript.src;
  var assetBase;
  try {
    assetBase = scriptUrl ? new URL("../assets/", scriptUrl) : new URL("assets/", document.baseURI);
  } catch (error) {
    assetBase = new URL("assets/", window.location.href);
  }

  var audioCache = Object.create(null);
  var active = null;
  var frame = 0;
  var hoverTimer = 0;
  var statusTimer = 0;
  var statusHideTimer = 0;
  var statusNode = null;

  function currentLanguage() {
    return document.documentElement.lang === "fa" ? "fa" : "en";
  }

  function sourceUrl(key) {
    return new URL(SOURCES[key].replace(/^assets\//, ""), assetBase).href;
  }

  function getStatusNode() {
    if (statusNode) return statusNode;
    statusNode = document.createElement("div");
    statusNode.className = "portfolio-audio-status";
    statusNode.setAttribute("role", "status");
    statusNode.setAttribute("aria-live", "polite");
    statusNode.hidden = true;
    document.body.appendChild(statusNode);
    return statusNode;
  }

  function showStatus(message) {
    var node = getStatusNode();
    node.textContent = message;
    node.hidden = false;
    node.classList.add("is-visible");
    clearTimeout(statusTimer);
    clearTimeout(statusHideTimer);
    statusTimer = setTimeout(function () {
      node.classList.remove("is-visible");
      statusHideTimer = setTimeout(function () {
        if (node) node.hidden = true;
      }, 240);
    }, 6500);
  }

  function labels(isPlaying) {
    if (currentLanguage() === "fa") {
      return isPlaying
        ? { aria: "توقف صدای امیرعباس", title: "توقف پخش" }
        : { aria: "پخش صدای امیرعباس", title: "گوش دادن به صدای امیرعباس" };
    }
    return isPlaying
      ? { aria: "Stop Amirabbas", title: "Stop listening" }
      : { aria: "Listen to Amirabbas", title: "Amirabbas, portfolio owner" };
  }

  function setButtonState(button, isPlaying) {
    if (!button) return;
    button.classList.toggle("is-on", !!isPlaying);
    button.setAttribute("aria-pressed", String(!!isPlaying));
    var copy = labels(!!isPlaying);
    button.setAttribute("aria-label", copy.aria);
    button.setAttribute("title", copy.title);
    var wrapper = button.closest(".nvw");
    if (wrapper) wrapper.classList.toggle("is-open", !!isPlaying);
    if (isPlaying) {
      button.classList.add("is-heard");
      button.removeAttribute("data-audio-error");
    } else {
      button.style.removeProperty("--lv");
      button.style.removeProperty("--lw");
      button.style.removeProperty("--p");
    }
  }

  function sectionFor(button, key) {
    if (key === "roles") return document.querySelector("[data-r55]");
    if (key === "match") return document.querySelector("[data-match]");
    if (key === "learn" || key === "hired") return button.closest("[data-brk59]") || button.closest(".sb59");
    return button.closest("section") || button.parentElement;
  }

  function stopActive(resetTime) {
    if (!active) return;
    var old = active;
    active = null;
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    if (old.observer) old.observer.disconnect();
    try {
      old.audio.pause();
      if (resetTime !== false) old.audio.currentTime = 0;
    } catch (err) { /* Some browsers do not expose a seekable range before metadata loads. */ }
    setButtonState(old.button, false);
    if (window.ZERO) window.ZERO.talking = null;
  }

  function updateVisuals() {
    if (!active) { frame = 0; return; }
    var audio = active.audio;
    var button = active.button;
    if (audio.paused || audio.ended) {
      stopActive(true);
      return;
    }
    var duration = Number.isFinite(audio.duration) && audio.duration > 0 ? audio.duration : 0;
    var progress = duration ? Math.max(0, Math.min(1, audio.currentTime / duration)) : 0;
    var beat = audio.currentTime * 7.1;
    var level = 0.18 + Math.abs(Math.sin(beat)) * 0.58;
    var breadth = 0.12 + Math.abs(Math.sin(beat * 0.61 + 1.2)) * 0.72;
    button.style.setProperty("--p", progress.toFixed(4));
    button.style.setProperty("--lv", level.toFixed(3));
    button.style.setProperty("--lw", breadth.toFixed(3));
    frame = requestAnimationFrame(updateVisuals);
  }

  function errorDescription(audio) {
    var code = audio && audio.error ? audio.error.code : 0;
    var names = {
      1: "aborted",
      2: "network error / file not found",
      3: "unsupported or corrupt audio encoding",
      4: "unsupported audio source"
    };
    return { code: code || "unknown", description: names[code] || "unknown media error" };
  }

  function handleLoadError(button, key, audio) {
    if (active && active.audio === audio) stopActive(true);
    var info = errorDescription(audio);
    var url = audio.currentSrc || audio.src || sourceUrl(key);
    if (button) {
      setButtonState(button, false);
      button.setAttribute("data-audio-error", "load");
    }
    console.error("[Portfolio audio] Could not load " + SOURCES[key], {
      url: url,
      mediaErrorCode: info.code,
      description: info.description,
      networkState: audio.networkState,
      readyState: audio.readyState
    });
    showStatus(currentLanguage() === "fa"
      ? "فایل صوتی بارگذاری نشد: " + SOURCES[key] + "؛ نام فایل، مسیر assets و دسترسی هاست را بررسی کن."
      : "Could not load " + SOURCES[key] + ". Check the filename, assets path, and host permissions.");
  }

  function getAudio(key, button) {
    var cached = audioCache[key];
    // Discard a failed media element so the visitor can retry after correcting a missing file.
    if (cached && cached.error) {
      try { cached.pause(); cached.removeAttribute("src"); cached.load(); } catch (err) { /* ignore cleanup errors */ }
      delete audioCache[key];
      cached = null;
    }
    if (cached) return cached;

    var path = SOURCES[key];
    if (!path) return null;

    var audio = new Audio();
    audio.preload = "auto";
    audio.autoplay = false;
    audio.loop = false;
    audio.setAttribute("playsinline", "");
    audio.setAttribute("webkit-playsinline", "");

    // Install listeners before assigning src/load: fast local or cached errors must not be missed.
    audio.addEventListener("error", function () {
      if (active && active.audio === audio) handleLoadError(active.button, key, audio);
    });
    audio.addEventListener("ended", function () {
      if (active && active.audio === audio) stopActive(true);
    });
    audio.addEventListener("pause", function () {
      if (active && active.audio === audio && !audio.ended && audio.currentTime > 0) {
        // External pauses are reflected in the speaker button instead of leaving it stuck on.
        setButtonState(active.button, false);
      }
    });
    audio.addEventListener("canplay", function () {
      if (active && active.audio === audio) active.button.removeAttribute("data-audio-error");
    });

    audio.src = sourceUrl(key);
    audioCache[key] = audio;
    audio.load();
    return audio;
  }

  function handlePlayError(button, key, err) {
    var path = SOURCES[key];
    if (button) {
      setButtonState(button, false);
      button.setAttribute("data-audio-error", "play");
    }
    console.error("[Portfolio audio] Playback was rejected for " + path, err);
    var message;
    if (currentLanguage() === "fa") {
      message = err && err.name === "NotAllowedError"
        ? "مرورگر اجازه پخش صدا را نداد. دوباره روی آیکون بلندگو کلیک کن."
        : "پخش صدا انجام نشد. فرمت MP3، مسیر " + path + " و دسترسی فایل را بررسی کن.";
    } else {
      message = err && err.name === "NotAllowedError"
        ? "The browser blocked audio playback. Click the speaker button again."
        : "Audio playback failed. Check the MP3 format, " + path + ", and file permissions.";
    }
    showStatus(message);
  }

  function startPlayback(button, key, fromHover) {
    if (!button || !SOURCES[key]) return;
    if (active && active.button === button && !active.audio.paused) {
      if (!fromHover) stopActive(true);
      return;
    }

    stopActive(true);
    var audio = getAudio(key, button);
    if (!audio) return;
    if (audio.error) {
      handleLoadError(button, key, audio);
      return;
    }

    button.removeAttribute("data-audio-error");
    try { audio.currentTime = 0; } catch (err) { /* metadata may not be ready yet */ }
    try { audio.volume = 1; } catch (err) { /* iOS may manage volume at OS level */ }

    var scope = sectionFor(button, key);
    var state = { button: button, key: key, audio: audio, observer: null };
    active = state;
    setButtonState(button, true);
    if (window.ZERO) {
      window.ZERO.talking = key;
      if (typeof window.ZERO.emit === "function") window.ZERO.emit("voice", "portfolio-audio");
    }

    if (scope && "IntersectionObserver" in window) {
      state.observer = new IntersectionObserver(function (entries) {
        if (active !== state) return;
        if (entries.length && !entries[0].isIntersecting) stopActive(true);
      }, { threshold: 0.01 });
      state.observer.observe(scope);
    }

    var playPromise;
    try {
      // play() is called synchronously inside the user's click handler to satisfy autoplay policies.
      playPromise = audio.play();
    } catch (err) {
      if (active === state) stopActive(true);
      handlePlayError(button, key, err);
      return;
    }

    if (playPromise && typeof playPromise.then === "function") {
      playPromise.then(function () {
        if (active === state) {
          if (frame) cancelAnimationFrame(frame);
          frame = requestAnimationFrame(updateVisuals);
        }
      }).catch(function (err) {
        // A media error listener may already have shown the more useful file/path error.
        if (button && button.hasAttribute("data-audio-error")) return;
        if (active === state) stopActive(true);
        handlePlayError(button, key, err);
      });
    } else {
      frame = requestAnimationFrame(updateVisuals);
    }
  }

  // Capture the click before the template's legacy bubble-phase listener.
  // The button itself and its character animation remain unchanged.
  document.addEventListener("click", function (event) {
    var button = event.target && event.target.closest ? event.target.closest("[data-nv-b]") : null;
    if (!button) return;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    startPlayback(button, button.getAttribute("data-nv-b"), false);
  }, true);

  // Keep the template's optional hover-to-listen behaviour after a real user gesture.
  document.addEventListener("pointerover", function (event) {
    var button = event.target && event.target.closest ? event.target.closest("[data-nv-b]") : null;
    if (!button) return;
    event.stopImmediatePropagation();
    clearTimeout(hoverTimer);
    if (event.pointerType !== "mouse") return;
    if (navigator.userActivation && !navigator.userActivation.hasBeenActive) return;
    hoverTimer = setTimeout(function () {
      if (button.matches(":hover") && !(active && active.button === button && !active.audio.paused)) {
        startPlayback(button, button.getAttribute("data-nv-b"), true);
      }
    }, 180);
  }, true);

  document.addEventListener("pointerout", function (event) {
    var button = event.target && event.target.closest ? event.target.closest("[data-nv-b]") : null;
    if (!button) return;
    event.stopImmediatePropagation();
    if (event.relatedTarget && button.contains(event.relatedTarget)) return;
    clearTimeout(hoverTimer);
  }, true);

  document.addEventListener("focusin", function (event) {
    var button = event.target && event.target.closest ? event.target.closest("[data-nv-b]") : null;
    if (button) event.stopImmediatePropagation();
  }, true);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && active) stopActive(true);
  }, true);
  document.addEventListener("visibilitychange", function () {
    if (document.hidden && active) stopActive(true);
  });

  window.AMIRABBAS_PORTFOLIO_AUDIO = {
    stop: function () { stopActive(true); },
    paths: Object.assign({}, SOURCES),
    getActive: function () { return active ? { key: active.key, url: active.audio.currentSrc || active.audio.src } : null; }
  };
})();
