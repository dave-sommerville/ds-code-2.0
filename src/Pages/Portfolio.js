import HexLinks from "../Components/Portfolio/HexLinks";
import SelectionInput from "../Components/Portfolio/SelectionInput";
import {portfolioArray} from '../BLL/PortfolioItems';
import { motion } from 'framer-motion';

function Portfolio() {
  return(
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <section className="portfolio-wrapper">
        {/* Preload all portfolio images */}
        {portfolioArray.map((item, idx) => (
          <img
            key={`preload-${idx}`}
            src={item.imgUrl}
            alt=""
            style={{ display: 'none' }}
            loading="eager"
          />
        ))}
        <SelectionInput />
        <HexLinks />
      </section>
    </motion.div>
  );
}
export default Portfolio;