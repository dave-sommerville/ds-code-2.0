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
    ["featured","games", "ecommerce and organization"]
  );

  const hiveMind = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/hivemind-preview.jpg", 
    "HiveMind", 
    "Collaboration project creating our own version of a social media site.", 
    "https://dave-sommerville.github.io/hivemind/",
    ["featured","games"]
  );
  const cactusTheatre = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/cactus-preview.jpg", 
    "Cactus Theatre Co", 
    "Promotional website for Winnipeg Fringe Festival", 
    "https://cactus-theatre-co.ca",
    ["featured","games"]
  );
  const cedarU = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/cedar-university-preview.jpg", 
    "", 
    "", 
    "https://dave-sommerville.github.io/cedar-university-2024/",
    ["",""]
  );
  const switches = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/switches-and-styles-preview.jpg", 
    "", 
    "", 
    "https://dave-sommerville.github.io/switches-and-styles/",
    ["",""]
  );
  const hauntedHouse = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/console-app-preview.png", 
    "", 
    "", 
    "https://github.com/dave-sommerville/haunted-house",
    ["",""]
  );
  const csharpRPG = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/console-app-preview.png", 
    "", 
    "", 
    "https://github.com/dave-sommerville/decorator-rpg",
    ["",""]
  );
  const caseCollector = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/case-collector-preview.jpg", 
    "", 
    "", 
    "https://github.com/dave-sommerville/Case_Collector",
    ["",""]
  );
  const havocAndHaven = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/havoc-and-haven-preview.jpg", 
    "", 
    "", 
    "https://github.com/dave-sommerville/Havoc_And_Haven",
    ["",""]
  );
  const potionPortal = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/dungeon-crawler-preview.jpg", 
    "", 
    "", 
    "https://dave-sommerville.github.io/ds-code-releases/dungeons-of-draegmor",
    ["",""]
  );
  const dungeonCrawler = new Portfolio(
    "https://dave-sommerville.github.io/ds-code-releases/img/potion-portal-preview.gif", 
    "", 
    "", 
    "https://github.com/dave-sommerville/pixie-potion-brewery",
    ["",""]
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

