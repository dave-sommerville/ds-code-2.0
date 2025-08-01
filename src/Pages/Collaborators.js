import LinkListDisplay from "../Components/PageWide/LinkListDisplay";
import { Link } from 'react-router-dom';
import { collaboratorList } from "../BLL/Profile";
import '../css/pages/partial-pages.css';
function Collaborators() {
  return(
    <section className="collaboration-list">
      <h3>Collaborators</h3>
      <LinkListDisplay linkList={collaboratorList} ></LinkListDisplay>
      <Link to="/contact" className="small-title">Reach out here if you're interested in joining the list!</Link>
    </section>
  );
}
export default Collaborators;