import SelectionInput from "../Components/Portfolio/SelectionInput";
import PortfolioFramework from "../Components/Portfolio/PortfolioFramework";
import PortfolioItems from "../BLL/PortfolioItems";
import { motion } from 'framer-motion';
function Portfolio() {
  return(
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <section>
        <SelectionInput />
      </section>
    </motion.div>
  );
}
export default Portfolio;