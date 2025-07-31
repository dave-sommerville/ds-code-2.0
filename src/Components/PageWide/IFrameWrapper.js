function IFrameWrapper() {
  return(
    <div className="iframe-container">
      <iframe
        src={src}
        title={title}
        width={width}
        height={height}
        className="iframe-element"
        allowFullScreen
      ></iframe>
    </div>  );
}
export default IFrameWrapper;