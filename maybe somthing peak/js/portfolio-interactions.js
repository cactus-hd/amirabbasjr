(function () {
  "use strict";

  var site = window.ZERO;
  if (!site) return;

  /* Offline portfolio Q&A. The existing Ask panel uses these keywords to select concise answers. */
  site.faq = [
    {
      chip: true,
      q: "What is Kharjino?",
      k: ["kharjino", "finance app", "personal finance", "money management", "income", "expenses", "spending", "budget", "financial goals", "calendar", "analytics"],
      a: "Kharjino is a personal finance app for tracking income and expenses, reviewing spending day by day in a calendar, and understanding money habits through detailed analytics. It also offers practical budgeting suggestions and financial goals that help users plan their money with more intention. Explore it at kharjino.ir."
    },
    {
      chip: true,
      q: "What is RepoFlow?",
      k: ["repoflow", "repo flow", "git gui", "git interface", "git workspace", "git tool", "open source", "repository", "repositories", "readme", "license creator", "git agent"],
      a: "RepoFlow is an open-source, GUI-first workspace that makes Git easier to work with visually instead of relying on command-line workflows. It brings repository management, an AI agent for Git tasks, README and license creators, and collaborative work boards into one focused environment. Visit repoflow.com."
    },
    {
      chip: true,
      q: "Tell me about Bubble Planner",
      k: ["bubble planner", "bubbleplanner", "bub", "habit garden", "pomodoro", "task planner", "personal assistant", "cafe bazaar", "myket", "30k", "30000", "community", "podcast"],
      a: "Bubble Planner is a Persian-first personal assistant and productivity app published on Cafe Bazaar and Myket, with more than 30,000 users. It combines task management with AI assistance, a habit garden, smart Pomodoro, mini-games, podcasts, and an active community. The goal is to make planning and building better habits feel engaging. Visit bubbleplanner.ir."
    },
    {
      chip: true,
      q: "What is Privora?",
      k: ["privora", ".vora", "encrypted package", "encrypted file", "content protection", "opening limit", "expiry", "expiration", "license", "secure sharing", "privacy"],
      a: "Privora is a privacy-focused platform that packages text, audio, images, and video into encrypted .vora files. Each package can carry a configurable license, such as an expiry date or maximum opening count. It is designed for safer delivery of client work, paid educational content, private media, and sensitive organizational files. Privora is still pre-launch; its website provides a demo, including Android and iOS builds. Visit privora.com."
    },
    {
      chip: true,
      q: "Which technologies do you use?",
      k: ["technology", "technologies", "tech stack", "stack", "programming language", "languages", "kotlin", "jetpack compose", "javascript", "html", "css", "python", "typescript", "react native", "node.js", "express", "postgresql", "cloudflare", "nginx", "docker"],
      a: "My core skills include Kotlin, Jetpack Compose, Android development, JavaScript, HTML, CSS, and Python. I also work with Figma, Adobe XD, and Photoshop for UI/UX and prototyping. Privora’s stack includes TypeScript, React Native, Node.js, Express.js, PostgreSQL, Cloudflare, Nginx, and Docker."
    },
    {
      chip: true,
      q: "How can I contact you?",
      k: ["contact", "email", "telegram", "phone", "linkedin", "hire", "collaboration", "collaborate", "work together", "project inquiry", "reach amirabbas", "reach you"],
      a: "You can reach me on Telegram at @amirabbasjr55, by phone at +98 911 694 0787, or by email at amirabbasjarireh8@gmail.com. You can also connect with me on LinkedIn: linkedin.com/in/amirabbas-jarireh-29b8ba37a. Press the Start button at the bottom for quick contact links."
    },
    {
      q: "Who is Amirabbas Jarireh?",
      k: ["amirabbas", "amirabbas jarireh", "about you", "about amir", "who are you", "developer", "founder", "profile", "rasht"],
      a: "I’m Amirabbas Jarireh, an Android and Front-End Developer based in Rasht, Iran. I have 4+ years of experience in web programming and application development, and I enjoy turning product ideas into useful, polished digital experiences. I’m also the founder of Bubble Planner."
    },
    {
      q: "What is your professional experience?",
      k: ["experience", "work history", "professional background", "ares", "pars italiano", "front end developer", "founder experience", "employment"],
      a: "I founded and developed Bubble Planner, leading its product design, development, and launch. I also worked as a Front-End Developer at Ares Educational Group from January to March 2026, contributing to Pars Italiano, a responsive and gamified Italian-learning platform for Persian speakers."
    },
    {
      q: "Is Privora already launched?",
      k: ["privora launched", "privora available", "release", "released", "launch date", "pre launch", "not launched", "official launch", "android build", "ios build", "demo"],
      a: "Privora has not officially launched yet. Its website currently provides a demo, and Android and iOS builds are available there to explore the product direction. The project is being developed around encrypted .vora packages and configurable access licenses."
    },
    {
      q: "Why did you build RepoFlow?",
      k: ["why repoflow", "git difficult", "git boring", "command line", "terminal", "gui", "visual git", "ai agent", "git commands"],
      a: "RepoFlow comes from a simple idea: Git is powerful, but command-line workflows can feel difficult or repetitive for some developers. The project brings Git into a visual workspace, with an AI agent for routine Git tasks and supporting tools for documentation and team collaboration."
    },
    {
      q: "What makes Bubble Planner different?",
      k: ["different bubble", "bubble planner features", "features bub", "habit building", "mindfulness", "smart pomodoro", "ai assistant", "gamification", "mini games"],
      a: "Bubble Planner goes beyond a conventional to-do list. It combines everyday planning with habit-building, an AI assistant, smart Pomodoro sessions, mini-games, podcasts, and a community—bringing productivity and personal wellness together in one friendly experience."
    },
    {
      q: "What can Kharjino do?",
      k: ["kharjino features", "what can kharjino do", "track expenses", "track income", "spending calendar", "money stats", "financial statistics", "saving goals"],
      a: "With Kharjino, users can record income and expenses, see transactions on a calendar, explore detailed financial analytics, receive suggestions for better money management, and connect their savings to personal goals. It is designed to make everyday financial decisions easier to understand."
    },
    {
      q: "What projects are you open to?",
      k: ["open to work", "available", "freelance", "job opportunity", "opportunities", "collaboration", "new project", "hire you", "work with you", "what work"],
      a: "I’m open to Android and front-end development opportunities, software projects, and collaborations where I can contribute to both implementation and product thinking. I’m especially interested in useful applications, developer tools, productivity products, and thoughtful user experiences."
    },
    {
      q: "Do you build Android applications?",
      k: ["android", "kotlin", "jetpack compose", "mobile development", "mobile app", "native app", "android developer"],
      a: "Yes. Android development is one of my core areas. I work with Kotlin and Jetpack Compose, and I have experience taking application ideas through interface design, implementation, and publishing. Bubble Planner is one example of a product I founded and developed."
    },
    {
      q: "Where can I see your projects?",
      k: ["portfolio", "github", "project links", "source code", "repository", "live projects", "website", "show me"],
      a: "You can explore Kharjino at kharjino.ir, RepoFlow at repoflow.com, Bubble Planner at bubbleplanner.ir, and Privora at privora.com. Source code for selected work is available on my GitHub: github.com/cactus-hd."
    },
    {
      q: "Do you work on UI/UX design too?",
      k: ["ui", "ux", "figma", "adobe xd", "photoshop", "design", "prototyping", "interface", "user experience"],
      a: "Yes. Alongside development, I work on user interfaces, usability, and prototyping. My design toolkit includes Figma, Adobe XD, and Photoshop. I care about making products feel clear and enjoyable, not just technically functional."
    },
    {
      q: "Hi",
      k: ["hi", "hello", "hey", "good morning", "good evening"],
      a: "Hey! I’m Amirabbas’s portfolio assistant. Ask me about his skills, projects, experience, or how to get in touch."
    },
    {
      q: "Thanks",
      k: ["thanks", "thank you", "thx", "cheers"],
      a: "You’re welcome. Feel free to ask anything else about the projects, or use Start to get in touch with Amirabbas."
    }
  ];

  site.faqMiss = "I don’t have a specific answer for that yet. Try asking about Kharjino, RepoFlow, Bubble Planner, Privora, my technical skills, or how to contact me.";

  /* The existing Start control should open contact details, not navigate to the template's original product. */
  var modal = document.querySelector("[data-contact-modal]");
  var backdrop = document.querySelector("[data-contact-backdrop]");
  var startButton = document.querySelector("[data-start]");
  var closeButton = document.querySelector("[data-contact-close]");
  var previousFocus = null;

  function openContact() {
    if (!modal || !backdrop) return;
    previousFocus = document.activeElement;
    modal.hidden = false;
    backdrop.setAttribute("aria-hidden", "false");
    requestAnimationFrame(function () {
      modal.classList.add("is-open");
      backdrop.classList.add("is-open");
    });
    if (site.sfx && site.sfx.open) site.sfx.open();
    if (closeButton) closeButton.focus({ preventScroll: true });
  }

  function closeContact() {
    if (!modal || !backdrop || modal.hidden) return;
    modal.classList.remove("is-open");
    backdrop.classList.remove("is-open");
    backdrop.setAttribute("aria-hidden", "true");
    if (site.sfx && site.sfx.close) site.sfx.close();
    window.setTimeout(function () {
      modal.hidden = true;
      if (previousFocus && previousFocus.focus) previousFocus.focus({ preventScroll: true });
    }, 360);
  }

  /* Capture phase intentionally prevents the original template click handler from running. */
  document.addEventListener("click", function (event) {
    var trigger = event.target && event.target.closest ? event.target.closest("[data-start]") : null;
    if (!trigger) return;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    openContact();
  }, true);

  function labelStartButton() {
    if (startButton) startButton.setAttribute("aria-label", "Start a project with Amirabbas");
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", labelStartButton);
  else labelStartButton();


  /* Reveal each project's short description as its title/banner chapter enters the viewport. */
  function revealProjectDescriptions() {
    var cards = Array.prototype.slice.call(document.querySelectorAll(".ch63"));
    if (!cards.length) return;
    document.documentElement.classList.add("project-copy-reveal");
    if (!("IntersectionObserver" in window)) {
      cards.forEach(function (card) { card.classList.add("is-copy-visible"); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-copy-visible");
        observer.unobserve(entry.target);
      });
    }, { root: null, rootMargin: "0px 0px -12% 0px", threshold: 0.08 });
    cards.forEach(function (card) { observer.observe(card); });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", revealProjectDescriptions, { once: true });
  } else {
    revealProjectDescriptions();
  }

  /* Add a friendly first message while keeping the existing chat-bubble animation and chips. */
  function addIntroMessage() {
    var log = document.querySelector("[data-help-log]");
    if (log && !log.hasChildNodes()) {
      var intro = document.createElement("p");
      intro.className = "msg msg--them";
      intro.textContent = "Hi! I’m Amirabbas’s portfolio assistant. Ask me about his projects, skills, experience, or how to get in touch.";
      log.appendChild(intro);
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", addIntroMessage);
  else addIntroMessage();

  if (closeButton) closeButton.addEventListener("click", closeContact);
  if (backdrop) backdrop.addEventListener("click", closeContact);
  if (modal) modal.addEventListener("keydown", function (event) {
    if (event.key !== "Tab") return;
    var items = modal.querySelectorAll('a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])');
    if (!items.length) return;
    var first = items[0];
    var last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal && !modal.hidden) closeContact();
  });
})();
