import React from 'react';
import PdfPreview from './PdfPreview';

function PdfPreviewGallery({ pdfLinks }) {
  return (
    <div className="pdf-preview-gallery">
      {pdfLinks.map((link, index) => (
        <PdfPreview
          key={index}
          srcUrl={link.linkUrl}
          title={link.linkTitle}
        />
      ))}
    </div>
  );
}

export default PdfPreviewGallery;
