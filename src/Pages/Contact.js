import EmailForm from '../Components/Other/EmailForm.js';
import SocialMediaHexes from '../Components/Other/SocialMediaHexes.js';
import '../css/common/forms.css';
import { motion } from 'framer-motion';
function Contact() {
  return(
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <section className="contact">
        <EmailForm />
        <SocialMediaHexes />
      </section>
    </motion.div>
  );
}
export default Contact;