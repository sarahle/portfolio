import React, { Component } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class Resume extends Component {

  render() {
    return (
      <section id="resume">
        <h3>Resume</h3>
        <Document
          file="SarahLeResume.pdf"
        >
          <Page pageNumber={1} />
        </Document>

      </section>
    );
  }
}
