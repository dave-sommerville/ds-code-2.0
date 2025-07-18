  class Portfolio {
    #imgUrl ='';
    #title = '';
    #description = '';
    #linkUrl = '';
    #category = [];
    /*
    Portfolio Object
    - Categories
      - All
      - Featured
      - Games
      - ECommerce & Organization
      - Social Media
      - Full Stack
      - Console Apps
      - Freelance
      - Assignment
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
    "./src/img/blackjack-dave-sommerville-github.jpg", 
    "Blackjack", 
    "My online version of Blackjack, featuring deal animations and a persistant player bank.", 
    "https://dave-sommerville.github.io/blackjack/",
    ["featured","games"]
  );

  const scriptScavengers = new Portfolio(
    "./src/img/script-scavengers-dave-sommerville-github.jpg", 
    "Script Scavengers", 
    "Fast typing game with a desert scavenger theme. Including a highscore list.", 
    "https://dave-sommerville.github.io/script-scavengers/",
    ["featured","games"]
  );

  const codeBreaker = new Portfolio(
    "./src/img/code-breaker-dave-sommerville-github.jpg",
    "Code Breaker",
    "Based on the game Mastermind, players can test their logical deducation skills and track their times.", 
    "https://dave-sommerville.github.io/code-breaker/",
    ["featured","games"]
  );

  const booogle = new Portfolio(
    "./src/img/boogle-dave-sommerville-github.jpg",
    "Booogle", 
    "A handy online Boggle display for large groups or travelling."
    + "Letter probabilities reflect the physical version.", 
    "https://dave-sommerville.github.io/boogle/",
    ["featured","games"]
  );

  const meMyself = new Portfolio(
    "./src/img/me-myself-and-eye-dave-sommerville-github.jpg", 
    "Me, Myself, and Eye", 
    "A solipistic social media site where who you are is up to you.", 
    "https://dave-sommerville.github.io/social-media-app/",
    ["featured","games"]
  );

  const opalOnyx = new Portfolio(
    "./src/img/opal-and-onyx-dave-sommerville-github.jpg",
    "Opal & Onyx",
    "Collaboration project exploring luxury ecommerce design.",
    "https://dave-sommerville.github.io/opal-and-onyx/",
    ["featured","games"]
  );

  const hiveMind = new Portfolio(
    "./src/img/hivemind-dave-sommerville-github.jpg", 
    "HiveMind", 
    "Collaboration project creating our own version of a social media site.", 
    "https://dave-sommerville.github.io/hivemind/",
    ["featured","games"]
  );
  const cactusTheatre = new Portfolio(
    "./src/img/cactus-theatre-dave-sommerville-github.jpg", 
    "Cactus Theatre Co", 
    "Promotional website for Winnipeg Fringe Festival", 
    "https://cactus-theatre-co.ca",
    ["featured","games"]
  );

  export const portfolioArray = [
    blackjack,
    scriptScavengers,
    codeBreaker,
    booogle,
    meMyself,
    opalOnyx,
    hiveMind,
    cactusTheatre
  ];

