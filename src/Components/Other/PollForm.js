import '../../css/common/forms.css';
function PollForm({classChoice}) {
  return (
    <form name="poll" method="POST" data-netlify="true" netlify netlify-honeypot="bot-field" className={classChoice}>
      <h5>What game should I create next?</h5>

      {/* Hidden input for Netlify form handling */}
      <input type="hidden" name="form-name" value="poll" />
      <input type="hidden" name="bot-field" />

      <label className="poll-option pointer hover">
        <input type="radio" name="feature" value="Cactus Jump" />
        Cactus Jump
      </label>
      <br />

      <label className="poll-option pointer hover">
        <input type="radio" name="feature" value="Mine Sweeper" />
        My Minesweeper
      </label>
      <br />

      <label className="poll-option pointer hover">
        <input type="radio" name="feature" value="DS Paint" />
        DS Paint
      </label>
      <br />

      <label className="poll-option pointer hover">
        <input type="radio" name="feature" value="Whack a Hole" />
        Whack a Hole
      </label>
      <br />

      <button type="submit" className="pointer btn hover">
        Vote
      </button>
    </form>
  );
}
export default PollForm;
