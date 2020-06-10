import { Document, Page } from "react-pdf/dist/entry.webpack";
import pdfFile from "./pdf/Candidate_3.pdf";
import CommentViewer from '../../components/comments/CommentViewer'

import React, { Component, createRef } from 'react'
import {
  Grid,
  Rail,
  Ref,
  Sticky,
} from 'semantic-ui-react'

export default class StickyExampleAdjacentContext extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
    pages: []
  };

  contextRef = createRef();
  
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };
  
  render() {
    const { numPages } = this.state;
    return (
      <Ref innerRef={this.contextRef}>
        <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
          </Grid.Column>
        <Grid.Column width={5}>
              <Document file={pdfFile} onLoadSuccess={this.onDocumentLoadSuccess}>
                {Array.from(new Array(numPages), (el, index) => (
                  <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
              </Document>
        </Grid.Column>
        <Grid.Column width={4}>
              <Rail position='right'>
                <Sticky context={this.contextRef}>
                <CommentViewer pname="안철수" pId="307"/>
                </Sticky>
              </Rail>
        </Grid.Column>
        </Grid.Row>
      </Grid>
    </Ref>
    )
  }
}
