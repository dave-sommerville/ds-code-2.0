import DraggablePopup from "../Retro/DraggableDiv";
import PollForm from "../../Other/PollForm";

function PollPopUp({isVisible, onClose, barText}) {
   if (!isVisible) return null;

  return(
    <DraggablePopup barText={barText} onClose={onClose}>
      <PollForm classChoice="retro-poll"></PollForm>
    </DraggablePopup>
  );
}
export default PollPopUp;