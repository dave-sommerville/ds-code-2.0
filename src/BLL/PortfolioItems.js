  class Portfolio {
    #imgUrl ='';
    #title = '';
    #description = '';
    #linkUrl = '';
    #category = [];
    /*

    */
    constructor(img, title, desc, link, category) {
      this.imgUrl = img;
      this.title = title;
      this.description = desc;
      this.linkUrl = link;
      this.category = category;
    }
    set imgUrl(img) {
      this.#imgUrl = img;
    }
    set title(name) {
      this.#title = name;
    }
    set description(desc) {
      this.#description = desc;
    }
    set linkUrl(link) {
      this.#linkUrl = link;
    }
    set category(category) {
      this.#category = category;
    }
    get imgUrl() {
      return this.#imgUrl;
    }
    get title() {
      return this.#title;
    }
    get description() {
      return this.#description;
    }
    get linkUrl() {
      return this.#linkUrl;
    }
    get category() {
      return this.#category;
    }
  }
  const blackjack = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/blackjack-preview-start.jpg", // https://dave-sommerville.github.io/ds-code-releases/img/blackjack-preview-play.jpg
    "Blackjack", 
    "My online version of Blackjack, featuring deal animations and a persistant player bank.", 
    "https://dave-sommerville.github.io/blackjack/",
    ["featured","games", "large-scale"]
  );

  const scriptScavengers = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/script-scavengers-preview-start.jpg", // https://dave-sommerville.github.io/ds-code-releases/img/script-scavengers-preview-play.jpg
    "Script Scavengers", 
    "Fast typing game with a desert scavenger theme. Including a highscore list.", 
    "https://dave-sommerville.github.io/script-scavengers/",
    ["featured","games"]
  );

  const codeBreaker = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/code-breaker-preview.jpg",
    "Code Breaker",
    "Based on the game Mastermind, players can test their logical deducation skills and track their times.", 
    "https://dave-sommerville.github.io/code-breaker/",
    ["games"]
  );

  const booogle = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/boogle-preview.jpg",
    "Booogle", 
    "A handy online Boggle display for large groups or travelling."
    + "Letter probabilities reflect the physical version.", 
    "https://dave-sommerville.github.io/boogle/",
    ["games"]
  );

  const meMyself = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/me-myself-and-eye-preview.jpg", 
    "Me, Myself, and Eye", 
    "A solipistic social media site where who you are is up to you.", 
    "https://dave-sommerville.github.io/social-media-app/",
    ["social media","games"]
  );

  const opalOnyx = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/Opal-and-Onyx-preview.jpg",
    "Opal & Onyx",
    "Collaboration project exploring luxury ecommerce design.",
    "https://dave-sommerville.github.io/opal-and-onyx/",
    ["featured", "ecommerce and organization", "collaboration"]
  );

  const hiveMind = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/hivemind-preview.jpg", 
    "HiveMind", 
    "Collaboration project creating our own version of a social media site.", 
    "https://dave-sommerville.github.io/hivemind/",
    ["featured","social media", "collaboration"]
  );
  const cactusTheatre = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/cactus-preview.jpg", 
    "Cactus Theatre Co", 
    "Promotional website for Winnipeg Fringe Festival", 
    "https://cactus-theatre-co.ca",
    ["featured","ecommerce and organization", "freelance"]
  );
  const cedarU = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/cedar-university-preview.jpg", 
    "Cedar university", 
    "Informational website for fictional University", 
    "https://dave-sommerville.github.io/cedar-university-2024/",
    ["ecommerce and organization","collaboration"]
  );
  const switches = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/switches-and-styles-preview.jpg", 
    "Switches and Style", 
    "Tutorial designed to teach switches and controls in html and css", 
    "https://dave-sommerville.github.io/switches-and-styles/",
    ["tutorial"]
  );
  const hauntedHouse = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/console-app-preview.png", 
    "C# Haunted House", 
    "A c# haunted house console adventure", 
    "https://github.com/dave-sommerville/haunted-house",
    ["console app","games"]
  );
  const csharpRPG = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/console-app-preview.png", 
    "Basic c# rpg game", 
    "Interactive program exploring decorator design pattern", 
    "https://github.com/dave-sommerville/decorator-rpg",
    ["console app","games"]
  );
  const caseCollector = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/case-collector-preview.jpg", 
    "Case Collector", 
    "An organization system for criminal cases", 
    "https://github.com/dave-sommerville/Case_Collector",
    ["full stack"]
  );
  const havocAndHaven = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/havoc-and-haven-preview.jpg", 
    "Havoc and Haven", 
    "Covering the real estate needs of hero and villain alike", 
    "https://github.com/dave-sommerville/Havoc_And_Haven",
    ["full stack","social media"]
  );
  const potionPortal = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/dungeon-crawler-preview.jpg", 
    "Pixie Pearl's Potion Portal", 
    "Windows desktop app to manage see the effects of a variety of potions", 
    "https://dave-sommerville.github.io/ds-code-releases/dungeons-of-draegmor",
    ["games","full stack", "featured"]
  );
  const dungeonCrawler = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/potion-portal-preview.gif", 
    "Dungeons of Draegmor", 
    "A text based console RPG game, with random generation and sandbox playstyle", 
    "https://github.com/dave-sommerville/pixie-potion-brewery",
    ["console app","games", "featured"]
  );


  export const portfolioArray = [
    blackjack,
    scriptScavengers,
    codeBreaker,
    booogle,
    meMyself,
    opalOnyx,
    hiveMind,
    cactusTheatre,
    cedarU,
    switches,
    hauntedHouse,
    csharpRPG,
    caseCollector,
    havocAndHaven,
    potionPortal,
    dungeonCrawler
  ];

