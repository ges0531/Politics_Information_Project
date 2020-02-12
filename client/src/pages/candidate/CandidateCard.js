import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import { Card, Image } from 'semantic-ui-react'
import { Container, Divider, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import 이종구 from './image/이종구1.png';
import 김성곤 from './image/김성곤1.png';

const CardExampleImageCard = () => (
  <Container>
    <Divider horizontal section>
      강남구 갑
    </Divider>

    <Grid divided>
      <Grid.Row>

        <Grid.Column width={4}>
          <Link to="/CandidateDetail">
            <Card style={{height:'420px'}}>
              <Image src={이종구} wrapped ui={false} />
              <Card.Content>
                <Card.Header>이종구</Card.Header>
                <Card.Meta>새누리당</Card.Meta>
              </Card.Content>
            </Card>
          </Link>
        </Grid.Column>

        <Grid.Column width={4}>
        <Link to="/CandidateDetail2">
            <Card style={{height:'420px'}}>
              <Image src={김성곤} wrapped ui={false} />
              <Card.Content>
                <Card.Header>김성곤</Card.Header>
                <Card.Meta>더불어민주당</Card.Meta>
              </Card.Content>
            </Card>
          </Link>
        </Grid.Column>

        <Grid.Column width={4} />
        <Grid.Column width={4} />
      </Grid.Row>
    </Grid>

    <Divider horizontal section>
      강남구 을
    </Divider>

  </Container>
)

export default CardExampleImageCard