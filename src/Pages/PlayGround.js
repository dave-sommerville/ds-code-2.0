import '../css/playground.css';
import { motion } from 'framer-motion';

function PlayGround() {
  return(
        <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <section className="arcade">
      
      </section>
    </motion.div>
  );
}
export default PlayGround;