function LinkListDisplay({linkList, classTitle}) {
  return (
    <ul className={classTitle}>
      {linkList.map((link, index) => (
        <li key={index}>
          <a href={link.linkUrl} target="_blank">{link.linkName}</a>
        </li>
      ))}
    </ul>
  );
}
export default LinkListDisplay;