import React, { Component } from "react";
import { Document, Page } from "react-pdf/dist/entry.webpack";
import pdfFile from "./pdf/Candidate_1.pdf";
import CommentViewer from '../../components/comments/CommetViewer'

class CandidateCardDetail extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
    pages: []
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { pageNumber, numPages, pages } = this.state;
    return (
      <div>
        <Document file={pdfFile} onLoadSuccess={this.onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
        <p>
          {/* Page {pageNumber} of {pages} */}
        </p>
        <CommentViewer cname="문재인"/>
      </div>
    );
  }
}

export default CandidateCardDetail;
