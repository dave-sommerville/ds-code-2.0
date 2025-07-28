
function ExperienceDisplayList({ experienceLinks }) {
  return (
    <ul className="raised-link">
      {experienceLinks.map((link, index) => (
        <li key={index}>
          <a href={link.linkUrl}>{link.linkName}</a>
        </li>
      ))}
    </ul>
  );
}

export default ExperienceDisplayList;
