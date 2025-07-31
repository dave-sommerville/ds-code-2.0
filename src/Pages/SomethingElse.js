import { FaEgg } from "react-icons/fa6";
import '../css/pages/partial-pages.css';
function SomethingElse(){

  return(
    <section className="easter-egg">
      <h4>You found the easter egg!</h4>
      <p>Sorry, it hasn't hatched yet. Try again another time.</p>
      <p>
        <FaEgg className="easter-egg-icon"></FaEgg>
      </p>
    </section>
  );
}
export default SomethingElse;