import ExperienceDisplayList from "../Components/Other/ExperienceDisplayList";
import { Link } from 'react-router-dom';
import { collaboratorList } from "../BLL/Profile";

function Collaborators() {
  return(
    <section className="collaboration-list">
      <h3>Collaborators</h3>
      <ExperienceDisplayList experienceLinks={collaboratorList} ></ExperienceDisplayList>
      <Link to="/collaborators" className="">Say hi if you want to join the list</Link>
    </section>
  );
}
export default Collaborators;