import React from 'react'
import { Button, Divider, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const ButtonExampleGroupEqualWidth = () => (
  <Container>
    <Divider horizontal section>
      서울시
    </Divider>
    <Button.Group widths='5'>
      <Button href='/#/CandidateCard'>강남구</Button>
      <Button>서초구</Button>
      <Button>동작구</Button>
      <Button>관악구</Button>
      <Button>금천구</Button>
    </Button.Group>
    <Divider />
    <Divider horizontal section>
      경기도
    </Divider>
    <Button.Group widths='5'>
      <Button>수원시</Button>
      <Button>용인시</Button>
      <Button>화성시</Button>
      <Button>시흥시</Button>
      <Button>의정부시</Button>
    </Button.Group>
    </Container>
)

export default ButtonExampleGroupEqualWidth