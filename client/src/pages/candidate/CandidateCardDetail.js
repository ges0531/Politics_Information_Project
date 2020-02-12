import React, { Component } from "react";
import { Document, Page } from "react-pdf/dist/entry.webpack";
import pdfFile from "./pdf/test.pdf";

class CandidateCardDetail extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
    pages: []
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
    // let paging = function({numPages}) {
    //     let pages = [];
    //     for (let index = 1; index <= numPages; index++) {
    //         pages.push(<Page pageNumber={index} />);
    //     }
    //     return pages;
    // }
    // this.setState({pages : paging});
  };

  render() {
    const { pageNumber, numPages, pages } = this.state;
    return (
      <div>
        <Document file={pdfFile} onLoadSuccess={this.onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
          {/* {pages} */}
        </Document>
        <p>
          Page {pageNumber} of {pages}
        </p>
      </div>
    );
  }
}

export default CandidateCardDetail;
