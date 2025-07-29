function Article({imgUrl, imageName, textContent, hexOption}) {
  return(
    <article>
      <figure>
        <img src={imgUrl} alt={imageName} className={`about-image ` + hexOption}></img>
      </figure>
      <p>
        {textContent}
      </p>
    </article>
  );
}
export default Article;