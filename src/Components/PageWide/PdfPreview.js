function PdfPreviewList({srcUrl, title, size}) {
  return (
    <div key={index} style={styles.child}>
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
