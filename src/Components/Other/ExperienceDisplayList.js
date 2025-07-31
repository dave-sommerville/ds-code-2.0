
function ExperienceDisplayList({ experienceLinks }) {
  return (
    <ul>
      {experienceLinks.map((link, index) => (
        <li key={index}>
          <a href={link.linkUrl} target="_blank">{link.linkName}</a>
        </li>
      ))}
    </ul>
  );
}

export default ExperienceDisplayList;
