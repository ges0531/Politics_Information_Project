import React from "react";
import 'semantic-ui-css/semantic.min.css';
import { Button, Divider, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import ButtonGroup from "react-bootstrap/ButtonGroup";
// import Button from "react-bootstrap/Button";
// import ButtonToolbar from "react-bootstrap/ButtonToolbar";


const ButtonExampleGroupEqualWidth = () => {
  return (
    <Container>
      <Divider horizontal section>
        서울시
      </Divider>
      <Button.Group widths="5">
        <Button><Link to='/CandidateCard'>강남구</Link></Button>
        <Button>서초구</Button>
        <Button>동작구</Button>
        <Button>관악구</Button>
        <Button>금천구</Button>
      </Button.Group>
      <Divider />
      <Divider horizontal section>
        경기도
      </Divider>
      <Button.Group widths="5">
        <Button>수원시</Button>
        <Button>용인시</Button>
        <Button>화성시</Button>
        <Button>시흥시</Button>
        <Button>의정부시</Button>
      </Button.Group>
    </Container>
    // <div className="d-flex flex-column">
    //   <div>서울시</div>
    //   <ButtonGroup size="lg">
    //     <Button href="/CandidateCard" variant="secondary">
    //       강남구
    //     </Button>
    //     <Button variant="secondary">서초구</Button>
    //     <Button variant="secondary">동작구</Button>
    //     <Button variant="secondary">관악구</Button>
    //     <Button variant="secondary">금천구</Button>
    //   </ButtonGroup>
    //   <div>경기도</div>

    //   <ButtonGroup className="mt-3" size="lg">
    //     <Button variant="secondary">수원시</Button>
    //     <Button variant="secondary">용인시</Button>
    //     <Button variant="secondary">화성시</Button>
    //     <Button variant="secondary">시흥시</Button>
    //     <Button variant="secondary">의정부시</Button>
    //   </ButtonGroup>
    // </div>
  );
};

export default ButtonExampleGroupEqualWidth;
