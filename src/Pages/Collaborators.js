import LinkListDisplay from "../Components/PageWide/LinkListDisplay";
import { Link } from 'react-router-dom';
import { collaboratorList } from "../BLL/Profile";
import '../css/pages/partial-pages.css';

function Collaborators() {
  return(
    <section className="collaboration-list">
      <h3>Collaborators</h3>
      <LinkListDisplay linkList={collaboratorList} ></LinkListDisplay>
      <Link to="/collaborators" className="">Say hi if you want to join the list</Link>
    </section>
  );
}
export default Collaborators;