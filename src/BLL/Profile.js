  class Link {
    #linkName = '';
    #linkUrl = '';
    constructor(name, url) {
      this.linkName = name;
      this.linkUrl = url;
    }
    set linkName(name) {
      this.#linkName = name;
    }
    set linkUrl(url) {
      this.#linkUrl = url;
    }
    get linkName() {
      return this.#linkName;
    }
    get linkUrl() {
      return this.#linkUrl;
    }
  }
  const gitProfile = new Link("Github Profile", "");
  const gitRepos = new Link("GitHub Repositories","");
  const LinkedIn = new Link("LinkedIn","");
  const youTube = new Link("YouTube","");

  export const ProfileObject = {
    profileImgUrl: "https://dave-sommerville.github.io/ds-code-releases/img/profile.JPG",
    imgNameOne: "Profile Image",
    paragraphOne: "I was introduced to the internet in the final years of the 1990s, back when the internet screamed. The web back then was clumsy, quirky, and a little cringey; let's simply say I could relate. Those early days shaped me into the person I am today and the internet has shaped the world as we know it.",
    paragraphTwo: "This past year, as a Software Development student at MITT, I have learned the tools to shape the internet myself. From sleek front-end design to robust data structures and innovative software, I've gained a wealth of knowledge. While I'm new to the field, I've been busy putting that knowledge to use. I've built a strong foundation and a growing portfolio that reflects my dedication and progress.",
    paragraphThree: "In addition to my recent studies, I bring creativity, a strong work ethic, and a knack for unique problem-solving to every project I take on. I am currently open and seeking work, however I'm also interested in inspiration or collaboration. Please enjoy my work and drop a message if you have anything to say.",
    articleTwoImgUrl: "https://dave-sommerville.github.io/ds-code-releases/img/Opal-and-Onyx-preview.jpg",
    imgNameTwo: "Opal and Onyx preview",
    articleThreeImgUrl: "https://dave-sommerville.github.io/ds-code-releases/img/blackjack-preview-start.jpg",
    imgNameThree: "Blackjack preview",
    links: [
      gitProfile,
      gitRepos,
      LinkedIn,
      youTube
    ]
  }
