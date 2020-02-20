import Candidate from './pdf/Candidate_7.png';
import CommentViewer from '../../components/comments/CommentViewer'

import React, { Component, createRef } from 'react'
import {
  Grid,
  Rail,
  Ref,
  Sticky,
} from 'semantic-ui-react'

export default class StickyExampleAdjacentContext extends Component {
  contextRef = createRef();
  
  render() {
    return (
      <Ref innerRef={this.contextRef}>
        <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
          </Grid.Column>
        <Grid.Column width={8}>
              <img src={Candidate} />
        </Grid.Column>
        <Grid.Column width={2}>
              <Rail position='right'>
                <Sticky context={this.contextRef}>
                  <CommentViewer pname="오영국" pId="303" />
                </Sticky>
              </Rail>
        </Grid.Column>
        </Grid.Row>
      </Grid>
    </Ref>
    )
  }
}