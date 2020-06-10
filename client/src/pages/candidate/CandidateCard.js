import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Card, Image } from "semantic-ui-react";
import { Container, Divider, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

import Candidate_main_1 from "./image/Candidate_main_1.png";
import Candidate_main_2 from "./image/Candidate_main_2.png";
import Candidate_main_3 from "./image/Candidate_main_3.png";
import Candidate_main_4 from "./image/Candidate_main_4.png";
import Candidate_main_5 from "./image/Candidate_main_5.png";
import Candidate_main_6 from "./image/Candidate_main_6.png";
import Candidate_main_7 from "./image/Candidate_main_7.png";
import Candidate_main_8 from "./image/Candidate_main_8.png";
import Candidate_main_9 from "./image/Candidate_main_9.png";
import Candidate_main_10 from "./image/Candidate_main_10.png";
import Candidate_main_11 from "./image/Candidate_main_11.png";
import Candidate_main_12 from "./image/Candidate_main_12.png";
import Candidate_main_13 from "./image/Candidate_main_13.png";

const CardExampleImageCard = () => (
  <Container>
    <Divider horizontal section></Divider>

    <Grid divided>
      <Grid.Row>
        <Grid.Column width={4}>
          <Link to="/view/CandidateDetail">
            <Card style={{ height: "100%" }}>
              <Image src={Candidate_main_1} wrapped ui={false} />
              <Card.Content>
                <Card.Header>문재인</Card.Header>
                <Card.Meta>더불어민주당</Card.Meta>
              </Card.Content>
            </Card>
          </Link>
        </Grid.Column>

        <Grid.Column width={4}>
          <Link to="/view/CandidateDetail2">
            <Card style={{ height: "100%" }}>
              <Image src={Candidate_main_2} wrapped ui={false} />
              <Card.Content>
                <Card.Header>홍준표</Card.Header>
                <Card.Meta>자유한국당</Card.Meta>
              </Card.Content>
            </Card>
          </Link>
        </Grid.Column>

        <Grid.Column width={4}>
          <Link to="/view/CandidateDetail3">
            <Card style={{ height: "100%" }}>
              <Image src={Candidate_main_3} wrapped ui={false} />
              <Card.Content>
                <Card.Header>안철수</Card.Header>
                <Card.Meta>국민의당</Card.Meta>
              </Card.Content>
            </Card>
          </Link>
        </Grid.Column>
        <Grid.Column width={4}>
          <Link to="/view/CandidateDetail4">
            <Card style={{ height: "100%" }}>
              <Image src={Candidate_main_4} wrapped ui={false} />
              <Card.Content>
                <Card.Header>유승민</Card.Header>
                <Card.Meta>바른정당</Card.Meta>
              </Card.Content>
            </Card>
          </Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Divider horizontal section></Divider>
    <Grid divided>
      <Grid.Row>
        <Grid.Column width={4}>
          <Link to="/view/CandidateDetail5">
            <Card style={{ height: "100%" }}>
              <Image src={Candidate_main_5} wrapped ui={false} />
              <Card.Content>
                <Card.Header>심상정</Card.Header>
                <Card.Meta>정의당</Card.Meta>
              </Card.Content>
            </Card>
          </Link>
        </Grid.Column>

        <Grid.Column width={4}>
          <Link to="/view/CandidateDetail6">
            <Card style={{ height: "100%" }}>
              <Image src={Candidate_main_6} wrapped ui={false} />
              <Card.Content>
                <Card.Header>조원진</Card.Header>
                <Card.Meta>새누리당</Card.Meta>
              </Card.Content>
            </Card>
          </Link>
        </Grid.Column>

        <Grid.Column width={4}>
          <Link to="/view/CandidateDetail7">
            <Card style={{ height: "100%" }}>
              <Image src={Candidate_main_7} wrapped ui={false} />
              <Card.Content>
                <Card.Header>오영국</Card.Header>
                <Card.Meta>경제애국당</Card.Meta>
              </Card.Content>
            </Card>
          </Link>
        </Grid.Column>
        <Grid.Column width={4}>
          <Link to="/view/CandidateDetail8">
            <Card style={{ height: "100%" }}>
              <Image src={Candidate_main_8} wrapped ui={false} />
              <Card.Content>
                <Card.Header>장성민</Card.Header>
                <Card.Meta>국민대통합당</Card.Meta>
              </Card.Content>
            </Card>
          </Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Divider horizontal section></Divider>

    <Grid divided>
      <Grid.Row>
        <Grid.Column width={4}>
          <Link to="/view/CandidateDetail9">
            <Card style={{ height: "100%" }}>
              <Image src={Candidate_main_9} wrapped ui={false} />
              <Card.Content>
                <Card.Header>이재오</Card.Header>
                <Card.Meta>늘푸른한국당</Card.Meta>
              </Card.Content>
            </Card>
          </Link>
        </Grid.Column>

        <Grid.Column width={4}>
          <Link to="/view/CandidateDetail10">
            <Card style={{ height: "100%" }}>
              <Image src={Candidate_main_10} wrapped ui={false} />
              <Card.Content>
                <Card.Header>김선동</Card.Header>
                <Card.Meta>민중연합당</Card.Meta>
              </Card.Content>
            </Card>
          </Link>
        </Grid.Column>

        <Grid.Column width={4}>
          <Link to="/view/CandidateDetail11">
            <Card style={{ height: "100%" }}>
              <Image src={Candidate_main_11} wrapped ui={false} />
              <Card.Content>
                <Card.Header>이경희</Card.Header>
                <Card.Meta>한국국민당</Card.Meta>
              </Card.Content>
            </Card>
          </Link>
        </Grid.Column>
        <Grid.Column width={4}>
          <Link to="/view/CandidateDetail12">
            <Card style={{ height: "100%" }}>
              <Image src={Candidate_main_12} wrapped ui={false} />
              <Card.Content>
                <Card.Header>윤홍식</Card.Header>
                <Card.Meta>홍익당</Card.Meta>
              </Card.Content>
            </Card>
          </Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Divider horizontal section></Divider>

    <Grid divided>
      <Grid.Row>
        <Grid.Column width={4}>
          <Link to="/view/CandidateDetail13">
            <Card style={{ height: "100%" }}>
              <Image src={Candidate_main_13} wrapped ui={false} />
              <Card.Content>
                <Card.Header>김민찬</Card.Header>
                <Card.Meta>무소속</Card.Meta>
              </Card.Content>
            </Card>
          </Link>
        </Grid.Column>

        {/* <Grid.Column width={4}></Grid.Column>

        <Grid.Column width={4}></Grid.Column>
        <Grid.Column width={4}></Grid.Column> */}
      </Grid.Row>
    </Grid>
  </Container>
);

export default CardExampleImageCard;
