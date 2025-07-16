function Article({imgUrl, imageName, textContent}) {
  return(
    <article>
      <figure>
        <img src={imgUrl} alt={imageName}></img>
      </figure>
      <p>
        {textContent}
      </p>
    </article>
  );
}
export default Article;