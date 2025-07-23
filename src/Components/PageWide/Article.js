function Article({imgUrl, imageName, textContent, hexOption}) {
  return(
    <article>
      <figure className={hexOption}>
        <img src={imgUrl} alt={imageName} className="about-image"></img>
      </figure>
      <p>
        {textContent}
      </p>
    </article>
  );
}
export default Article;