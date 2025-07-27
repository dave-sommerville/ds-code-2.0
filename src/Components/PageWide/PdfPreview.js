
function PdfPreview({srcUrl, title, index}) {
  return (
    <div key={index}>
      <iframe
        src={srcUrl}
        title={title}
      ></iframe>
      <span>{title}</span>
    </div>
  );
}
export default PdfPreview;
