import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'
import ReactMarkdown from 'react-markdown';
import IntroMd from './README.md';

class displayMd extends Component {
    constructor() {
        super();
        this.state = { markdown: '' };
    }

    componentWillMount() {
        fetch(IntroMd).then(res => res.text()).then(text => this.setState({ markdown: text }));
    }

    render() {
        const { markdown } = this.state;
        return (
            <div>
                <Container text style={{ marginTop: '7em' }}>
                    <Header as='h1'>팀 소개 페이지</Header>
                    <p>우리팀은 어쩌구</p>
                    <ReactMarkdown source={markdown} />
                </Container>
            </div>
        );
    }
}

export default displayMd;