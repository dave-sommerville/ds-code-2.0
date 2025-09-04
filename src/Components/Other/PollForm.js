import '../../css/common/forms.css';

function PollForm({ classChoice }) {
  return (
    <form
      name="poll"
      method="POST"
      data-netlify="true"
      netlify
      netlify-honeypot="bot-field"
      className={classChoice}
    >
      <h5>How do you feel about the growing role of AI in everyday life?</h5>

      {/* Hidden input for Netlify form handling */}
      <input type="hidden" name="form-name" value="poll" />
      <input type="hidden" name="bot-field" />

      <label className="poll-option pointer hover">
        <input type="radio" name="ai-opinion" value="Excited" />
        Excited — AI makes life easier and more innovative
      </label>
      <br />

      <label className="poll-option pointer hover">
        <input type="radio" name="ai-opinion" value="Cautious" />
        Cautious — I see benefits, but also big risks
      </label>
      <br />

      <label className="poll-option pointer hover">
        <input type="radio" name="ai-opinion" value="Neutral" />
        Neutral — I’m not sure it affects me much
      </label>
      <br />

      <label className="poll-option pointer hover">
        <input type="radio" name="ai-opinion" value="Skeptical" />
        Skeptical — AI is overhyped and concerning
      </label>
      <br />

      <button type="submit" className="pointer btn hover">
        Vote
      </button>
    </form>
  );
}

export default PollForm;
