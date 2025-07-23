// InfoExpander.jsx
function InfoExpander({ section }) {
  const contentMap = {
    Reviews: "Here are some kind words from collaborators and clients.",
    Experience: "I’ve worked on a wide range of web and software projects.",
    Education: "I’ve studied Computer Science and completed various certifications."
  };

  return (
    <div className="info-expander">
      <h3>{section}</h3>
      <p>{contentMap[section]}</p>
    </div>
  );
}

export default InfoExpander;
