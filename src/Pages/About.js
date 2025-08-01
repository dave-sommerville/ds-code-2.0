import {ProfileObject} from '../BLL/Profile.js';
import Article from '../Components/PageWide/Article.js';
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom';
import '../css/common/article.css';
import '../css/pages/partial-pages.css';
function About() {
  return(
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
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
          <p className="about-contact">
            <Link to="/contact" >Tell me what you think of my work</Link>
          </p>
      </section>
    </motion.div>
  );
}
export default About;