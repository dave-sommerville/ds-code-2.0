  
  class Portfolio {
    #imgUrl ='';
    #title = '';
    #description = '';
    #linkUrl = '';
    #collaborators = [];
    #category = [];

    constructor(img, title, desc, link, category, collaborators) {
      this.imgUrl = img;
      this.title = title;
      this.description = desc;
      this.linkUrl = link;
      this.collaborators = collaborators;
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
    set collaborators(collaborators) {
      this.#collaborators = collaborators;
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
    get collaborators() {
      return this.#collaborators;
    }
    get category() {
      return this.#category;
    }
  }
  const blackjack = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/blackjack-preview-start.jpg", // https://dave-sommerville.github.io/ds-code-releases/img/blackjack-preview-play.jpg
    "Blackjack", 
    "Blackjack, featuring deal animations and a persistant player bank.", 
    "https://dave-sommerville.github.io/blackjack/",
    null,
    ["Featured","Game", "Large-scale"]
  );
  const scriptScavengers = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/script-scavengers-preview-start.jpg", // https://dave-sommerville.github.io/ds-code-releases/img/script-scavengers-preview-play.jpg
    "Script Scavengers", 
    "Fast typing game with a desert scavenger theme.", 
    "https://dave-sommerville.github.io/script-scavengers/",
    null,
    ["Featured","Game"]
  );
  const codeBreaker = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/code-breaker-preview.jpg",
    "Code Breaker",
    "Logical deducation game with timer and highscore.", 
    "https://dave-sommerville.github.io/code-breaker/",
    null,
    ["Game"]
  );
  const booogle = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/boogle-preview.jpg",
    "Booogle", 
    "A handy online Boggle display for large groups or travelling.", 
    "https://dave-sommerville.github.io/boogle/",
    null,
    ["Game"]
  );
  const meMyself = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/me-myself-and-eye-preview.jpg", 
    "Me, Myself, and Eye", 
    "A solipistic social media site where who you are is up to you.", 
    "https://dave-sommerville.github.io/social-media-app/",
    null, 
    ["Social media","Game"]
  );
  const opalOnyx = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/Opal-and-Onyx-preview.jpg",
    "Opal & Onyx",
    "Collaboration project exploring luxury ecommerce design.",
    "https://dave-sommerville.github.io/opal-and-onyx/",
    ["Sam", "Myles"],
    ["Featured", "Ecommerce and Organization"]
  );
  const hiveMind = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/hivemind-preview.jpg", 
    "HiveMind", 
    "Collaboration project creating our own version of a social media site.", 
    "https://dave-sommerville.github.io/hivemind/",
    ["Sam", "Myles"],
    ["Featured","Social media"]
  );
  const cactusTheatre = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/cactus-preview.jpg", 
    "Cactus Theatre Co", 
    "Promotional website for Winnipeg Fringe Festival", 
    "https://cactus-theatre-co.ca",
    null,
    ["Featured","Ecommerce and Organization", "Freelance"]
  );
  const cedarU = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/cedar-university-preview.jpg", 
    "Cedar university", 
    "Informational website for fictional University",
    "https://dave-sommerville.github.io/cedar-university-2024/", 
    ["Ecommerce and Organization"],                               
    ["Sam", "Myles"]                                              
  );
  const switches = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/switches-and-styles-preview.jpg", 
    "Switches and Style", 
    "Tutorial designed to teach switches and controls in html and css", 
    "https://dave-sommerville.github.io/switches-and-styles/",
    null,
    ["Tutorial"]
  );
  const hauntedHouse = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/console-app-preview.png", 
    "C# Haunted House", 
    "A c# haunted house console adventure", 
    "https://github.com/dave-sommerville/haunted-house",
    null,
    ["Console app","Game"]
  );
  const csharpRPG = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/console-app-preview.png", 
    "Basic c# rpg game", 
    "Interactive program exploring decorator design pattern", 
    "https://github.com/dave-sommerville/decorator-rpg",
    null,
    ["Console app","Game"]
  );
  const caseCollector = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/case-collector-preview.jpg", 
    "Case Collector", 
    "An organization system for criminal cases", 
    "https://github.com/dave-sommerville/Case_Collector",
    null,
    ["Full stack"]
  );
  const havocAndHaven = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/havoc-and-haven-preview.jpg", 
    "Havoc and Haven", 
    "Covering the real estate needs of hero and villain alike", 
    "https://github.com/dave-sommerville/Havoc_And_Haven",
    ["Gurpreet"],
    ["Full stack","Social media"]
  );
  const potionPortal = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/potion-portal-preview.gif", 
    "Pixie Pearl's Potion Portal", 
    "Winforms app to manage see the effects of a variety of potions", 
    "https://dave-sommerville.github.io/ds-code-releases/dungeons-of-draegmor",
    null,
    ["Game","Full stack", "Featured"]
  );
  const dungeonCrawler = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/dungeon-crawler-preview.jpg", 
    "Dungeons of Draegmor", 
    "A text based console sandbox RPG dungeon crawler", 
    "https://github.com/dave-sommerville/pixie-potion-brewery",
    null,
    ["Console app","Game", "Featured"]
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

