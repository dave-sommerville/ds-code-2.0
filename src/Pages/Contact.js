import EmailForm from '../Components/Other/EmailForm.js';
import SocialMediaHexes from '../Components/Other/SocialMediaHexes.js';
import '../css/social-media-hexes.css';
import '../css/forms.css';

function Contact() {
  return(
    <section>
      <EmailForm />
      <SocialMediaHexes />
    </section>
  );
}
export default Contact;