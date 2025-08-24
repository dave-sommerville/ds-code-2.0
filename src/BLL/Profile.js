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
  export const collaboratorList = [
    new Link("Gurpreet Kaur", "https://www.linkedin.com/in/gurpreetkaur-dev/"),
    new Link("Sam Ruetcky", "https://www.linkedin.com/in/samuel-reutcky/"),
    new Link("Myles Reid", "https://www.linkedin.com/in/mylesreid/"),
    new Link("Michael Shuaibu", "https://www.linkedin.com/in/oluwajuwon-shuaibu/")
  ];

  export const learningCertificates = [
    new Link("Advanced AI Prompt Engineering Techniques", "https://dave-sommerville.github.io/ds-code-releases/data/CertificateOfCompletion_Advanced%20Prompt%20Engineering%20Techniques.pdf#toolbar=0&navpanes=0"),
    new Link("Cert Prep: Scrum Master", "https://dave-sommerville.github.io/ds-code-releases/data/CertificateOfCompletion_Cert%20Prep%20Scrum%20Master.pdf#toolbar=0&navpanes=0"),
    new Link("Microsoft Power Platform Fundamentals", "https://dave-sommerville.github.io/ds-code-releases/data/CertificateOfCompletion_Microsoft%20Power%20Platform%20Fundamentals%20PL900%20Exam%20Tips.pdf#toolbar=0&navpanes=0"),
    new Link("React Essentials Training", "https://dave-sommerville.github.io/ds-code-releases/data/CertificateOfCompletion_React%20Essential%20Training.pdf#toolbar=0&navpanes=0"),
    new Link("Scrum Advanced", "https://dave-sommerville.github.io/ds-code-releases/data/CertificateOfCompletion_Scrum%20Advanced.pdf#toolbar=0&navpanes=0"),
    new Link("SEO Foundations", "https://dave-sommerville.github.io/ds-code-releases/data/CertificateOfCompletion_SEO%20Foundations.pdf#toolbar=0&navpanes=0"),
    new Link("SharePoint Essential Training: Beyond the Basics", "https://dave-sommerville.github.io/ds-code-releases/data/CertificateOfCompletion_Sharepoint%20Online%20Essential%20Training%20Beyond%20the%20Basics.pdf#toolbar=0&navpanes=0"),
    new Link("SharePoint Essential Training: The Basics", "https://dave-sommerville.github.io/ds-code-releases/data/CertificateOfCompletion_SharePoint%20Online%20Essential%20Training%20The%20Basics.pdf#toolbar=0&navpanes=0"),
    new Link("Web Accessibility for Developers", "https://dave-sommerville.github.io/ds-code-releases/data/CertificateOfCompletion_Web%20Accessibility%20for%20Developers.pdf#toolbar=0&navpanes=0")
  ];

  export const ProfileObject = {
    profileImgUrl: "https://dave-sommerville.github.io/ds-code-releases/img/profile.JPG",
    imgNameOne: "Profile Image",
    paragraphOne: "I was introduced to the internet in the final years of the 1990s, back when the internet screamed. The web back then was clumsy, quirky, and a little cringey; let's simply say I could relate. Those early days shaped me into the person I am today and the internet has shaped the world as we know it.",
    paragraphTwo: "This past year, as a Software Development student at MITT, I have learned the tools to shape the internet myself. From sleek front-end design to robust data structures and innovative software, I've gained a wealth of knowledge. While I'm new to the field, I've been busy putting that knowledge to use. I've built a strong foundation and a growing portfolio that reflects my dedication and progress.",
    paragraphThree: "In addition to my recent studies, I bring creativity, a strong work ethic, and a knack for unique problem-solving to every project I take on. I am currently open and seeking work, however I'm also interested in inspiration or collaboration.",
    articleTwoImgUrl: "https://dave-sommerville.github.io/ds-code-releases/img/Opal-and-Onyx-preview.jpg",
    imgNameTwo: "Opal and Onyx preview",
    articleThreeImgUrl: "https://dave-sommerville.github.io/ds-code-releases/img/blackjack-preview-start.jpg",
    imgNameThree: "Blackjack preview",
    gitProfile: new Link("Github Profile", ""),
    gitRepos: new Link("GitHub Repositories",""),
    linkedIn: new Link("LinkedIn","https://www.linkedin.com/in/dave-sommerville-2abb50326"),
    youTube: new Link("YouTube",""),
    certificates: learningCertificates,
    resume: "https://dave-sommerville.github.io/ds-code-releases/data/Dave-Sommerville-Resume-2025-Developer-Programmer-Designer-WinnipegMB.pdf"
  }
