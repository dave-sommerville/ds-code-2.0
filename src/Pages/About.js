import {ProfileObject} from '../BLL/Profile.js';
import Article from '../Components/PageWide/Article.js';

function About() {
  return(
    <section className="article-container">
      <Article 
        imgUrl={ProfileObject.profileImgUrl} 
        imageName={ProfileObject.imgNameOne} 
        textContent={ProfileObject.paragraphOne} 
      />
      <Article 
        imgUrl={ProfileObject.articleTwoImgUrl}
        imageName={ProfileObject.imgNameTwo} 
        textContent={ProfileObject.paragraphTwo} 
      />
      <Article 
        imgUrl={ProfileObject.articleThreeImgUrl} 
        imageName={ProfileObject.imgNameThree} 
        textContent={ProfileObject.paragraphThree} 
      />
    </section>
  );
}
export default About;