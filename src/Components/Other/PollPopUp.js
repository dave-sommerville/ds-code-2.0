import DraggablePopup from "../HangMan/DraggableDiv";
import PollForm from "./PollForm";

function PollPopUp({isVisible, onClose}) {
   if (!isVisible) return null;

  return(
    <DraggablePopup  onClose={onClose}>
      <PollForm classChoice="retro-poll"></PollForm>
    </DraggablePopup>
  );
}
export default PollPopUp;