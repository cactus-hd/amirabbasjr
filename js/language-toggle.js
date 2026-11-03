(function () {
  "use strict";

  var root = document.documentElement;
  var toggle = document.querySelector("[data-language-toggle]");
  var label = document.querySelector("[data-language-label]");
  var site = window.ZERO || {};
  if (!toggle) return;

  // These four voice markers now play Amirabbas’s recordings, not the template founder’s old speech captions.
  if (site.navid && site.navid.cap) {
    ["roles", "learn", "match", "hired"].forEach(function (key) { delete site.navid.cap[key]; });
  }

  var textFa = {
    "Skip to main content": "رفتن به محتوای اصلی",
    "Explore": "شروع همکاری",
    "Ask Amirabbas": "از امیرعباس بپرس",
    "PROJECT INQUIRY": "درخواست همکاری",
    "Have a project in mind?": "ایده‌ای برای ساخت یک پروژه داری؟",
    "Tell me what you are building. Reach out through any of these channels and let’s talk about making it real.": "درباره چیزی که می‌خواهی بسازی صحبت کنیم. از یکی از راه‌های ارتباطی زیر پیام بده تا درباره تبدیل ایده‌ات به محصول واقعی گفت‌وگو کنیم.",
    "Phone": "تلفن",
    "Connect professionally": "ارتباط حرفه‌ای",
    "Open to software development opportunities, product collaborations, and ambitious ideas.": "برای فرصت‌های توسعه نرم‌افزار، همکاری در ساخت محصولات و ایده‌های بلندپروازانه آماده‌ام.",
    "Home": "خانه",
    "Projects": "پروژه‌ها",
    "About Me": "درباره من",
    "years of web and mobile development experience.": "سال تجربه در توسعه وب و اپلیکیشن‌های موبایل.",
    "Scroll down": "برای ادامه به پایین اسکرول کنید",
    "Technical skills": "مهارت‌ها",
    "and": "و تخصص‌های",
    "expertise.": "فنی.",
    "Build": "ساخت",
    "products": "محصولات",
    "from": "از",
    "idea": "ایده",
    "to": "تا",
    "launch.": "عرضه.",
    "I": "من",
    "build": "محصولات",
    "useful": "نرم‌افزاری",
    "software": "کاربردی",
    "products.": "می‌سازم.",
    "A personal finance app for tracking income and expenses, exploring spending through a calendar, and turning detailed analytics into practical money insights. Set financial goals, get smarter budgeting suggestions, and make everyday money management feel clear and rewarding.": "یک اپلیکیشن مدیریت مالی شخصی برای ثبت درآمد و هزینه‌ها، مشاهده تراکنش‌ها در تقویم و شناخت دقیق‌تر الگوی خرج‌کردن. با گزارش‌های تحلیلی، پیشنهادهای کاربردی و امکان تعریف هدف‌های مالی، مدیریت پول را ساده‌تر و لذت‌بخش‌تر کن.",
    "An open-source, GUI-first Git workspace that replaces command-heavy workflows with a visual way to manage repositories. Its AI agent can handle Git tasks, while built-in README and license creators and team boards keep projects moving together.": "یک فضای کاری متن‌باز و گرافیکی برای مدیریت Git و مخازن کد، بدون وابستگی همیشگی به دستورات ترمینال. ایجنت هوش مصنوعی کارهای Git را انجام می‌دهد و ابزارهای ساخت README و لایسنس، همراه با بوردهای تیمی، مدیریت پروژه را یکپارچه می‌کنند.",
    "A Persian-first personal assistant and productivity app, published on Cafe Bazaar and Myket with 30,000+ users. It combines tasks with AI assistance, a habit garden, smart Pomodoro, mini-games, podcasts, and an active community.": "یک دستیار شخصی و اپلیکیشن بهره‌وری ایرانی که در کافه‌بازار و مایکت منتشر شده و بیش از ۳۰ هزار کاربر دارد. بابل پلنر مدیریت کارها را با دستیار هوش مصنوعی، باغچه عادت‌ها، پومودوروی هوشمند، بازی‌های کوچک، پادکست و یک کامیونیتی فعال ترکیب می‌کند.",
    "A privacy-focused platform that packages text, audio, images, and video into encrypted .vora files. Each package can include an expiry date and opening limit, helping creators, freelancers, educators, and organizations share sensitive content with more control. Pre-launch demo with Android and iOS builds.": "یک پلتفرم متمرکز بر حریم خصوصی که فایل‌های متنی، صوتی، تصویری و ویدیویی را در بسته‌های رمزنگاری‌شده با فرمت ‎.vora قرار می‌دهد. هر بسته می‌تواند تاریخ انقضا و محدودیت دفعات بازشدن داشته باشد؛ راهکاری برای اشتراک‌گذاری کنترل‌شده محتوای حساس. پروژه هنوز پیش از انتشار رسمی است و دمو و بیلدهای اندروید و iOS دارد.",
    "Inside": "در دلِ",
    "The technologies behind Privora’s encrypted content platform.": "فناوری‌هایی که زیرساخت پلتفرم رمزنگاری محتوای Privora را شکل می‌دهند.",
    "Stack": "فناوری‌ها",
    "I build useful software products.": "محصولات نرم‌افزاری کاربردی می‌سازم.",
    "Open to Android, front-end, and software development opportunities.": "برای همکاری در توسعه اندروید، فرانت‌اند و محصولات نرم‌افزاری آماده‌ام.",
    "Portfolio links": "لینک‌های پورتفولیو",
    "Social profiles": "شبکه‌های اجتماعی",
    "Telegram": "تلگرام",
    "Email": "ایمیل",
    "LinkedIn": "لینکدین",
    "© 2026 Amirabbas Jarireh": "© ۲۰۲۶ امیرعباس جریره",
    "Building products from ideas, applying technical skills, and creating user-focused experiences": "ساخت محصول از ایده، به‌کارگیری مهارت‌های فنی و خلق تجربه‌های کاربرمحور",
    "Portfolio navigation": "ناوبری پورتفولیو",
    "Ask about my work, skills, or projects": "درباره تجربه، مهارت‌ها یا پروژه‌هایم بپرس",
    "Close": "بستن",
    "Close contact window": "بستن پنجره ارتباط",
    "Send": "ارسال",
    "Fields": "حوزه‌ها",
    "Replay": "پخش دوباره",
    "Listen": "گوش دادن",
    "Stop listening": "توقف پخش",
    "All skills": "همه مهارت‌ها",
    "Mobile": "توسعه موبایل",
    "Front-End": "فرانت‌اند",
    "Programming": "برنامه‌نویسی",
    "UI/UX": "طراحی UI/UX",
    "Product": "توسعه محصول",
    "Android Development": "توسعه اندروید",
    "Front-End Development": "توسعه فرانت‌اند",
    "Python Programming": "برنامه‌نویسی پایتون",
    "UI/UX Design": "طراحی UI/UX",
    "Product Development": "توسعه محصول",
    "Android development": "توسعه اندروید",
    "User-friendly mobile experiences": "تجربه‌های کاربری روان در موبایل",
    "Responsive web design": "طراحی واکنش‌گرای وب",
    "Programming": "برنامه‌نویسی",
    "Creative problem-solving": "حل خلاقانه مسئله",
    "Interface design and prototyping": "طراحی رابط کاربری و نمونه‌سازی",
    "End-to-end product development": "توسعه محصول از ایده تا عرضه",
    "User-centered design": "طراحی کاربرمحور",
    "Application usability": "کاربردپذیری اپلیکیشن",
    "Gamification and interactive experiences": "بازی‌وارسازی و تجربه‌های تعاملی",
    "Product development": "توسعه محصول",
    "Gamification": "بازی‌وارسازی",
    "Tools": "ابزارها",
    "What you build": "چیزی که می‌سازی",
    "Start": "شروع",
    "Start project": "شروع پروژه",
    "Build products from idea to launch.": "ساخت محصولات از ایده تا عرضه.",
    "I build useful software products.": "من محصولات نرم‌افزاری کاربردی می‌سازم.",
    "View project": "مشاهده پروژه",
    "Open project": "بازکردن پروژه"
  };

  var attrFa = {
    "Explore portfolio": "مشاهده پورتفولیو",
    "Ask Amirabbas a question": "پرسیدن سؤال از امیرعباس",
    "Menu": "منو",
    "Close": "بستن",
    "Close contact window": "بستن پنجره ارتباط",
    "Start a project with Amirabbas": "شروع همکاری با امیرعباس",
    "Portfolio navigation": "ناوبری پورتفولیو",
    "Ask about my work, skills, or projects": "درباره تجربه، مهارت‌ها یا پروژه‌هایم بپرس",
    "Privora project": "پروژه Privora",
    "Kharjino project": "پروژه خرجینو",
    "RepoFlow project": "پروژه RepoFlow",
    "Bubble Planner project": "پروژه Bubble Planner",
    "Privora encrypted content platform": "پلتفرم محتوای رمزنگاری‌شده Privora",
    "Web and mobile development experience": "تجربه توسعه وب و موبایل",
    "Fields": "حوزه‌ها",
    "Portfolio links": "لینک‌های پورتفولیو",
    "Social profiles": "شبکه‌های اجتماعی",
    "Listen to Amirabbas": "پخش صدای امیرعباس",
    "Stop Amirabbas": "توقف صدای امیرعباس",
    "Amirabbas, portfolio owner": "امیرعباس، صاحب این پورتفولیو",
    "Build products from idea to launch.": "ساخت محصولات از ایده تا عرضه.",
    "I build useful software products.": "من محصولات نرم‌افزاری کاربردی می‌سازم."
  };

  var faqEn = Array.isArray(site.faq) ? site.faq.slice() : [];
  var faqFaContent = [
    ["خرجینو چیست؟", "خرجینو یک اپلیکیشن مدیریت مالی شخصی است که به شما امکان می‌دهد درآمد و هزینه‌ها را ثبت کنید، تراکنش‌ها را روزبه‌روز در تقویم ببینید و با آمار دقیق، الگوی خرج‌کردنتان را بهتر بشناسید. همچنین پیشنهادهایی برای مدیریت بهتر بودجه و تعیین اهداف مالی دارد. آن را در kharjino.ir ببینید.", ["خرجینو", "خرجینو چیست", "مدیریت مالی", "درآمد", "هزینه", "دخل و خرج", "تقویم مالی", "آمار مالی", "هدف مالی"]],
    ["RepoFlow چیست؟", "RepoFlow یک فضای کاری متن‌باز و گرافیکی برای Git است که مدیریت مخازن را از محیط دستورات به یک رابط بصری منتقل می‌کند. ایجنت هوش مصنوعی می‌تواند کارهای Git را انجام دهد و ابزارهای ساخت README و لایسنس و بوردهای همکاری تیمی نیز در همان محیط قرار دارند. وب‌سایت: repoflow.com.", ["ریپوفلو", "repo flow", "repoflow", "گیت", "گیت گرافیکی", "مدیریت مخزن", "هوش مصنوعی", "ایجنت", "متن باز"]],
    ["بابل پلنر چیست؟", "Bubble Planner یک دستیار شخصی و اپلیکیشن بهره‌وری ایرانی است که در کافه‌بازار و مایکت منتشر شده و بیش از ۳۰ هزار کاربر دارد. مدیریت کارها را با دستیار هوش مصنوعی، باغچه عادت‌ها، پومودوروی هوشمند، بازی، پادکست و کامیونیتی فعال ترکیب می‌کند. وب‌سایت: bubbleplanner.ir.", ["بابل پلنر", "بابل", "bubble planner", "باغچه عادت", "پومودورو", "کافه بازار", "مایکت", "سی هزار کاربر", "کامیونیتی"]],
    ["Privora چیست؟", "Privora پلتفرمی برای بسته‌بندی فایل‌های متنی، صوتی، تصویری و ویدیویی در قالب فایل رمزنگاری‌شده ‎.vora است. هر بسته می‌تواند لایسنس اختصاصی مانند تاریخ انقضا یا محدودیت تعداد دفعات بازشدن داشته باشد. این پروژه برای تحویل امن فایل‌های کاری، محتوای آموزشی پولی، رسانه‌های شخصی و اطلاعات سازمانی طراحی شده است. Privora هنوز پیش از انتشار رسمی است و وب‌سایت آن دمو و بیلدهای اندروید و iOS را ارائه می‌کند.", ["پریورا", "privora", "ورا", "رمزنگاری", "فایل رمزنگاری", "محدودیت بازشدن", "تاریخ انقضا", "لایسنس", "حریم خصوصی"]],
    ["از چه فناوری‌هایی استفاده می‌کنی؟", "مهارت‌های اصلی من Kotlin، Jetpack Compose، توسعه اندروید، JavaScript، HTML، CSS و Python هستند. برای طراحی رابط و نمونه‌سازی نیز با Figma، Adobe XD و Photoshop کار می‌کنم. استک Privora شامل TypeScript، React Native، Node.js، Express.js، PostgreSQL، Cloudflare، Nginx و Docker است.", ["تکنولوژی", "فناوری", "مهارت فنی", "استک", "کاتلین", "جت پک کامپوز", "جاوااسکریپت", "پایتون", "تایپ اسکریپت", "ری اکت نیتیو", "نود", "اکسپرس", "پستگرس", "کلودفلر", "انجین ایکس", "داکر"]],
    ["چطور با تو ارتباط بگیرم؟", "از طریق تلگرام با شناسه @amirabbasjr55، شماره +98 911 694 0787 یا ایمیل amirabbasjarireh8@gmail.com با من در ارتباط باش. همچنین می‌توانی در لینکدین با من کانکت شوی. دکمه شروع همکاری در نوار پایین صفحه، راه‌های ارتباطی را یکجا نمایش می‌دهد.", ["ارتباط", "تماس", "ایمیل", "تلگرام", "شماره تلفن", "لینکدین", "همکاری", "ارتباط با امیرعباس"]],
    ["امیرعباس جریره کیست؟", "من امیرعباس جریره هستم؛ توسعه‌دهنده اندروید و فرانت‌اند از رشت، ایران. بیش از چهار سال در برنامه‌نویسی وب و توسعه اپلیکیشن تجربه دارم و به تبدیل ایده‌ها به محصولات دیجیتال کاربردی و خوش‌ساخت علاقه‌مندم. همچنین بنیان‌گذار Bubble Planner هستم.", ["امیرعباس", "امیرعباس جریره", "درباره تو", "درباره امیر", "توسعه دهنده", "بنیان گذار", "رشت"]],
    ["تجربه کاری تو چیست؟", "من Bubble Planner را بنیان‌گذاری و توسعه داده‌ام و طراحی محصول، توسعه و فرایند انتشار آن را هدایت کرده‌ام. همچنین از ژانویه تا مارس ۲۰۲۶ به‌عنوان توسعه‌دهنده فرانت‌اند در گروه آموزشی Ares کار کردم و در توسعه Pars Italiano، یک پلتفرم تعاملی آموزش زبان ایتالیایی برای فارسی‌زبانان، مشارکت داشتم.", ["تجربه کاری", "سابقه", "رزومه", "ارس", "ارس ایتالیانو", "پارسی ایتالیانو", "فرانت اند", "استخدام"]],
    ["آیا Privora منتشر شده است؟", "خیر؛ Privora هنوز به‌صورت رسمی منتشر نشده است. وب‌سایت پروژه دمو و نسخه‌های آزمایشی اندروید و iOS را برای بررسی مسیر محصول ارائه می‌کند. هسته پروژه بر بسته‌های رمزنگاری‌شده ‎.vora و لایسنس‌های دسترسی قابل‌تنظیم متمرکز است.", ["پریورا منتشر شده", "انتشار پریورا", "لانچ", "منتشر شده", "نسخه اندروید", "نسخه ios", "دمو"]],
    ["چرا RepoFlow را ساختی؟", "ایده RepoFlow از اینجا آمد که Git ابزار قدرتمندی است، اما کار با خط فرمان برای بعضی توسعه‌دهندگان دشوار یا تکراری می‌شود. RepoFlow یک محیط بصری برای مدیریت Git فراهم می‌کند و ایجنت هوش مصنوعی، کارهای روزمره Git را ساده‌تر می‌کند؛ ابزارهای مستندسازی و بوردهای تیمی هم در همین فضا قرار گرفته‌اند.", ["چرا ریپوفلو", "چرا repoflow", "گیت سخت", "ترمینال", "خط فرمان", "رابط گرافیکی", "ایجنت گیت"]],
    ["چه چیزی Bubble Planner را متفاوت می‌کند؟", "Bubble Planner فقط یک فهرست کارها نیست؛ برنامه‌ریزی روزانه را با ساخت عادت، دستیار هوش مصنوعی، پومودوروی هوشمند، بازی‌های کوچک، پادکست و کامیونیتی ترکیب می‌کند تا بهره‌وری و مراقبت شخصی در یک تجربه دوستانه کنار هم قرار بگیرند.", ["تفاوت بابل پلنر", "امکانات بابل", "عادت سازی", "هوش مصنوعی", "بازی وار سازی", "بازی", "پادکست"]],
    ["خرجینو چه امکاناتی دارد؟", "در خرجینو می‌توانی درآمد و هزینه‌ها را ثبت کنی، تراکنش‌ها را در تقویم ببینی، گزارش‌ها و تحلیل‌های مالی دقیق بگیری، پیشنهادهایی برای مدیریت بهتر پول دریافت کنی و پس‌اندازت را به هدف‌های شخصی متصل کنی.", ["امکانات خرجینو", "ثبت هزینه", "ثبت درآمد", "گزارش مالی", "آمار", "پس انداز", "هدف گذاری"]],
    ["برای چه همکاری‌هایی آماده‌ای؟", "برای فرصت‌های توسعه اندروید و فرانت‌اند، پروژه‌های نرم‌افزاری و همکاری‌هایی که بتوانم در کنار پیاده‌سازی فنی در تفکر محصول هم نقش داشته باشم، آماده‌ام. به‌ویژه به اپلیکیشن‌های کاربردی، ابزارهای توسعه‌دهندگان، محصولات بهره‌وری و تجربه‌های کاربری سنجیده علاقه دارم.", ["آماده همکاری", "فرصت شغلی", "فریلنس", "استخدام", "پروژه جدید", "همکاری", "چه کاری قبول می کنی"]],
    ["اپلیکیشن اندروید هم توسعه می‌دهی؟", "بله. توسعه اندروید یکی از حوزه‌های اصلی کاری من است. با Kotlin و Jetpack Compose کار می‌کنم و تجربه تبدیل ایده اپلیکیشن به طراحی رابط، پیاده‌سازی و انتشار را دارم. Bubble Planner یکی از نمونه‌کارهایی است که بنیان‌گذاری و توسعه داده‌ام.", ["اندروید", "کاتلین", "جت پک", "اپلیکیشن موبایل", "توسعه موبایل", "برنامه اندروید"]],
    ["پروژه‌هایت را کجا می‌توانم ببینم؟", "می‌توانی خرجینو را در kharjino.ir، ریپوفلو را در repoflow.com، بابل پلنر را در bubbleplanner.ir و Privora را در privora.com ببینی. کد منبع بعضی از پروژه‌ها نیز در GitHub من در دسترس است: github.com/cactus-hd.", ["نمونه کار", "پروژه ها", "گیت هاب", "سورس کد", "لینک پروژه", "وب سایت"]],
    ["طراحی UI/UX هم انجام می‌دهی؟", "بله. در کنار توسعه نرم‌افزار روی رابط کاربری، کاربردپذیری و نمونه‌سازی هم کار می‌کنم. ابزارهای طراحی من شامل Figma، Adobe XD و Photoshop هستند. برایم مهم است محصول علاوه بر عملکرد فنی، واضح و لذت‌بخش هم باشد.", ["طراحی", "رابط کاربری", "تجربه کاربری", "فیگما", "ادوبی ایکس دی", "فتوشاپ", "نمونه سازی"]],
    ["سلام!", "سلام! من دستیار پورتفولیوی امیرعباس هستم. درباره پروژه‌ها، مهارت‌ها، تجربه کاری یا راه‌های ارتباطی سؤال بپرس.", ["سلام", "درود", "صبح بخیر", "عصر بخیر"]],
    ["ممنونم", "خواهش می‌کنم! هر سؤال دیگری درباره پروژه‌ها داری بپرس یا برای دریافت راه‌های ارتباطی، دکمه شروع همکاری را بزن.", ["ممنون", "مرسی", "تشکر", "سپاس"]]
  ];

  var originals = new WeakMap();
  var attrOriginals = new WeakMap();
  var directionOriginals = new WeakMap();
  var observer = null;
  var activeLanguage = "en";
  var introEn = "Hi! I’m Amirabbas’s portfolio assistant. Ask me about his projects, skills, experience, or how to get in touch.";
  var introFa = "سلام! من دستیار پورتفولیوی امیرعباس هستم. درباره پروژه‌ها، مهارت‌ها، تجربه کاری یا راه‌های ارتباطی سؤال بپرس.";

  function rememberText(node) {
    if (!originals.has(node)) originals.set(node, node.nodeValue);
    return originals.get(node);
  }

  function translateTextNode(node, lang) {
    var original = rememberText(node);
    if (lang === "en") {
      if (node.nodeValue !== original) node.nodeValue = original;
      return;
    }
    var trimmed = original.trim();
    if (!trimmed || !textFa[trimmed]) return;
    var start = original.indexOf(trimmed);
    var translated = original.slice(0, start) + textFa[trimmed] + original.slice(start + trimmed.length);
    if (node.nodeValue !== translated) node.nodeValue = translated;
  }

  function translateAttributes(el, lang) {
    ["aria-label", "title", "placeholder", "alt"].forEach(function (name) {
      if (!el.hasAttribute(name)) return;
      var bag = attrOriginals.get(el);
      if (!bag) { bag = {}; attrOriginals.set(el, bag); }
      if (!(name in bag)) bag[name] = el.getAttribute(name);
      var original = bag[name];
      var translated = lang === "en" ? original : (attrFa[original] || original);
      if (el.getAttribute(name) !== translated) el.setAttribute(name, translated);
    });
  }

  function walkText(node, lang) {
    if (!node) return;
    if (node.nodeType === 3) { translateTextNode(node, lang); return; }
    if (node.nodeType !== 1 && node !== document) return;
    if (node.nodeType === 1 && /^(SCRIPT|STYLE|SVG|PATH|CANVAS|NOSCRIPT)$/.test(node.tagName)) return;
    if (node.nodeType === 1 && node.hasAttribute("data-lang-overlay")) return;
    if (node.nodeType === 1) translateAttributes(node, lang);
    var child = node.firstChild;
    while (child) { var next = child.nextSibling; walkText(child, lang); child = next; }
  }

  // The template deliberately keeps several large sections LTR for animation/layout.
  // Apply RTL to the actual text-bearing nodes inside those sections, without flipping
  // canvases, product mockups, the technology stack, or Latin product names.
  var persianTextSelectors = [
    ".scout28__h", ".scout28__l", ".scout28__ln", ".scout28__d", ".scout28__rows",
    ".r55-h", ".r55-chip2", ".r55-c__name", ".r55-b__name", ".r55-b__k", ".r55-b__v", ".r55-b__ship", ".r55-chips",
    ".sb59__l", ".sb59__nw", ".sb59__w", ".r128-l2", ".ch63__h", ".ch63__desc", ".mt88__head", ".mt88__t", ".mt88__sub", ".mt126__k",
    ".sb81__in", ".sb81__p", ".gate__legal", ".gate__social", ".nudge52", ".contact-modal", ".help__head", ".help__log", ".help__chips", ".help__form input"
  ];

  function applyPersianDirection(scope, lang) {
    if (!scope) return;
    var rootNode = scope.nodeType === 9 ? scope.body : (scope.nodeType === 3 ? (scope.parentElement || scope) : scope);
    if (!rootNode) return;

    function markDirection(el, direction) {
      if (!el || el.nodeType !== 1) return;
      if (!directionOriginals.has(el)) directionOriginals.set(el, el.hasAttribute("dir") ? el.getAttribute("dir") : null);
      el.setAttribute("dir", direction);
      el.setAttribute("data-fa-direction", direction);
    }

    function restoreDirections(container) {
      var marked = [];
      if (container.matches && container.matches("[data-fa-direction]")) marked.push(container);
      if (container.querySelectorAll) marked = marked.concat(Array.prototype.slice.call(container.querySelectorAll("[data-fa-direction]")));
      marked.forEach(function (el) {
        var originalDir = directionOriginals.get(el);
        if (originalDir === null) el.removeAttribute("dir");
        else if (typeof originalDir === "string") el.setAttribute("dir", originalDir);
        el.removeAttribute("data-fa-direction");
      });
    }

    if (lang !== "fa") {
      restoreDirections(rootNode);
      return;
    }

    // Explicitly cover the page's animated text containers and dynamically-built skill cards.
    persianTextSelectors.forEach(function (selector) {
      var matches = [];
      if (rootNode.matches && rootNode.matches(selector)) matches.push(rootNode);
      if (rootNode.querySelectorAll) matches = matches.concat(Array.prototype.slice.call(rootNode.querySelectorAll(selector)));
      matches.forEach(function (el) { markDirection(el, "rtl"); });
    });

    // Keep brand names, numbers and the Privora stack in their natural Latin direction.
    var ltrSelectors = [".scout28__n", ".ch63__t", ".mt91__stage", ".mt91__cos", ".mt91__co", ".mt91__stack"];
    ltrSelectors.forEach(function (selector) {
      var matches = [];
      if (rootNode.matches && rootNode.matches(selector)) matches.push(rootNode);
      if (rootNode.querySelectorAll) matches = matches.concat(Array.prototype.slice.call(rootNode.querySelectorAll(selector)));
      matches.forEach(function (el) { markDirection(el, "ltr"); });
    });

    // The original template keeps several large section shells LTR for pinned and
    // horizontal animations. Apply direction to the nearest semantic text owner rather
    // than each tiny SplitText span: setting dir on every character wrapper reverses the
    // visual order of Persian words in some of the animated headings.
    var rtlOwnerSelector = persianTextSelectors.join(",");
    var inlineTags = /^(SPAN|B|STRONG|EM|I|SMALL|A|SUB|SUP|MARK|ABBR)$/;
    var walker = document.createTreeWalker(rootNode, NodeFilter.SHOW_TEXT);
    var node;
    var persianChars = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/;
    while ((node = walker.nextNode())) {
      if (!persianChars.test(node.nodeValue || "")) continue;
      var parent = node.parentElement;
      if (!parent || parent.closest("script,style,svg,canvas,noscript,code")) continue;
      if (parent.closest(".scout28__n,.ch63__t,.mt91__stage,.mt91__cos,.mt91__co,.mt91__stack,[data-fa-direction=\"ltr\"]")) continue;

      var owner = parent.closest(rtlOwnerSelector);
      if (!owner) {
        owner = parent;
        while (owner.parentElement && owner.parentElement !== rootNode && inlineTags.test(owner.tagName)) {
          owner = owner.parentElement;
        }
      }
      markDirection(owner, "rtl");
    }
  }

  function updateFaq(lang) {
    if (!Array.isArray(faqEn) || !faqEn.length || faqFaContent.length !== faqEn.length) return;
    if (lang === "en") {
      site.faq = faqEn;
      site.faqMiss = "I don’t have a specific answer for that yet. Try asking about Kharjino, RepoFlow, Bubble Planner, Privora, my technical skills, or how to contact me.";
    } else {
      site.faq = faqEn.map(function (entry, index) {
        var fa = faqFaContent[index];
        return Object.assign({}, entry, { q: fa[0], a: fa[1], k: (entry.k || []).concat(fa[2]) });
      });
      site.faqMiss = "برای این سؤال پاسخ مشخصی در اطلاعات فعلی ندارم. درباره خرجینو، RepoFlow، بابل پلنر، Privora، مهارت‌های فنی یا راه‌های ارتباطی سؤال بپرس.";
    }
    var chips = document.querySelectorAll("[data-help-chips] .hchip");
    chips.forEach(function (chip) {
      var entry = site.faq[Number(chip.getAttribute("data-q"))];
      if (entry) chip.textContent = entry.q;
    });
    var log = document.querySelector("[data-help-log]");
    if (log) {
      log.innerHTML = "";
      var msg = document.createElement("p");
      msg.className = "msg msg--them";
      msg.textContent = lang === "fa" ? introFa : introEn;
      log.appendChild(msg);
    }
  }

  function setLanguage(lang) {
    lang = lang === "fa" ? "fa" : "en";
    activeLanguage = lang;
    root.lang = lang;
    root.dir = lang === "fa" ? "rtl" : "ltr";
    root.classList.toggle("is-fa", lang === "fa");
    walkText(document.body, lang);
    applyPersianDirection(document.body, lang);
    updateFaq(lang);

    if (label) label.textContent = lang === "fa" ? "EN" : "فا";
    toggle.setAttribute("aria-label", lang === "fa" ? "تغییر زبان به انگلیسی" : "Switch language to Persian");
    toggle.setAttribute("title", lang === "fa" ? "English" : "فارسی");
    toggle.setAttribute("aria-pressed", String(lang === "fa"));
    document.title = lang === "fa" ? "امیرعباس جریره | توسعه‌دهنده اندروید و فرانت‌اند" : "Amirabbas Jarireh | Android & Front-End Developer";
    var description = document.querySelector('meta[name="description"]');
    var ogTitle = document.querySelector('meta[property="og:title"]');
    var ogDescription = document.querySelector('meta[property="og:description"]');
    if (description) description.setAttribute("content", lang === "fa"
      ? "امیرعباس جریره، توسعه‌دهنده اندروید و فرانت‌اند با بیش از چهار سال تجربه در ساخت محصولات وب و موبایل؛ بنیان‌گذار Bubble Planner و سازنده محصولات نرم‌افزاری کاربردی."
      : "Android and Front-End Developer with 4+ years of experience building user-friendly web and mobile products. Founder of Bubble Planner; skilled in Kotlin, Jetpack Compose, JavaScript, HTML, CSS, and Python.");
    if (ogTitle) ogTitle.setAttribute("content", document.title);
    if (ogDescription) ogDescription.setAttribute("content", lang === "fa"
      ? "نمونه‌کارهای امیرعباس جریره در توسعه اندروید، مهندسی فرانت‌اند و ساخت محصولات دیجیتال با تمرکز بر کاربردپذیری و طراحی سنجیده."
      : "Explore Android development, front-end engineering, and digital products built with a focus on usability and thoughtful design.");

    try { localStorage.setItem("amirabbas-portfolio-language", lang); } catch (err) { /* storage may be disabled */ }

    // The section titles use pinned ScrollTrigger scenes. Recalculate their geometry after
    // Persian font metrics and RTL flex ordering have been applied.
    var readyFonts = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    Promise.resolve(readyFonts).then(function () {
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          if (window.ScrollTrigger && typeof window.ScrollTrigger.refresh === "function") {
            window.ScrollTrigger.refresh();
            if (typeof window.ScrollTrigger.update === "function") window.ScrollTrigger.update(true);
          }
        });
      });
    });
  }

  var languageStorageKey = "amirabbas-portfolio-language";
  var languageScrollKey = "amirabbas-portfolio-language-scroll";

  function restoreScrollAfterLanguageReload() {
    var savedY = null;
    try {
      savedY = sessionStorage.getItem(languageScrollKey);
      sessionStorage.removeItem(languageScrollKey);
    } catch (err) { /* session storage may be disabled */ }
    if (savedY === null) return;
    var targetY = Number(savedY);
    if (!Number.isFinite(targetY) || targetY < 0) return;
    var fonts = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    Promise.resolve(fonts).then(function () {
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          if (window.ScrollTrigger && typeof window.ScrollTrigger.refresh === "function") window.ScrollTrigger.refresh();
          window.scrollTo(0, targetY);
          if (window.ScrollTrigger && typeof window.ScrollTrigger.update === "function") window.ScrollTrigger.update(true);
        });
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", restoreScrollAfterLanguageReload, { once: true });
  } else {
    window.addEventListener("load", restoreScrollAfterLanguageReload, { once: true });
  }

  toggle.addEventListener("click", function () {
    var nextLanguage = activeLanguage === "en" ? "fa" : "en";
    var persisted = false;
    try {
      localStorage.setItem(languageStorageKey, nextLanguage);
      persisted = localStorage.getItem(languageStorageKey) === nextLanguage;
    } catch (err) { /* fall back to the live translator below */ }

    if (persisted) {
      try { sessionStorage.setItem(languageScrollKey, String(window.scrollY || window.pageYOffset || 0)); } catch (err) { /* optional */ }
      if (site.sfx && site.sfx.tick) site.sfx.tick();
      // Reload lets the template split the translated Persian text into its own animated word/character spans.
      window.location.reload();
      return;
    }

    setLanguage(nextLanguage);
    if (site.sfx && site.sfx.tick) site.sfx.tick();
  });

  // Translate future FAQ chips, role cards and labels injected by the original template scripts.
  if ("MutationObserver" in window) {
    observer = new MutationObserver(function (records) {
      if (activeLanguage !== "fa") return;
      records.forEach(function (record) {
        if (record.type === "characterData") {
          translateTextNode(record.target, "fa");
          applyPersianDirection(record.target.parentElement, "fa");
        } else record.addedNodes.forEach(function (node) {
          walkText(node, "fa");
          applyPersianDirection(node, "fa");
        });
        if (record.type === "attributes" && record.target.nodeType === 1) translateAttributes(record.target, "fa");
      });
    });
    observer.observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ["aria-label", "title", "placeholder", "alt"] });
  }

  var saved = "en";
  try { saved = localStorage.getItem("amirabbas-portfolio-language") || "en"; } catch (err) { saved = "en"; }
  setLanguage(saved);
})();
