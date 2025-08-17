import HexLinks from "../Components/Portfolio/HexLinks";
import SelectionInput from "../Components/Portfolio/SelectionInput";
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
        <SelectionInput />
        <HexLinks />
      </section>
    </motion.div>
  );
}
export default Portfolio;