import React from 'react';
import PdfPreview from './PdfPreview';

function PdfPreviewGallery({ pdfLinks }) {
  return (
    <ul className="pdf-preview-gallery raised-link">
      {pdfLinks.map((link, index) => (
        <li key={index}>
          <a href={link.linkUrl}>{link.linkName}</a>
        </li>
      ))}
    </ul>
  );
}

export default PdfPreviewGallery;
