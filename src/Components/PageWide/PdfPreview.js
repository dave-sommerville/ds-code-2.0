
function PdfPreviewList({srcUrl, title, size, index}) {
  return (
    <div key={index}>
      <iframe
        src={srcUrl}
        title={title}
        width={size}
        height={size}
      ></iframe>
      <span style={title}>{title}</span>
    </div>
  );
}
export default PdfPreviewList;
