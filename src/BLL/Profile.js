function Profile(){
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

  const ProfileObject = {
    profileImgUrl: '',
    paragraphOne: '',
    paragraphTwo: '',
    paragraphThree: '',
    articleTwoImgUrl: '',
    articleThreeImgUrl: '',
    links: [
      gitProfile,
      gitRepos,
      LinkedIn,
      youTube
    ]
  }
}
export default Profile;