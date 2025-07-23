import {ProfileObject} from '../BLL/Profile.js';
import Article from '../Components/PageWide/Article.js';
import '../css/article.css';

function About() {
  return(
    <section className="article-container">
      <Article 
        imgUrl={ProfileObject.profileImgUrl} 
        imageName={ProfileObject.imgNameOne} 
        textContent={ProfileObject.paragraphOne} 
        hexOption={"about-hex"}
      />
      <Article 
        imgUrl={ProfileObject.articleTwoImgUrl}
        imageName={ProfileObject.imgNameTwo} 
        textContent={ProfileObject.paragraphTwo}
        hexOption={""}
      />
      <Article 
        imgUrl={ProfileObject.articleThreeImgUrl} 
        imageName={ProfileObject.imgNameThree} 
        textContent={ProfileObject.paragraphThree}
        hexOption={""}
      />
    </section>
  );
}
export default About;