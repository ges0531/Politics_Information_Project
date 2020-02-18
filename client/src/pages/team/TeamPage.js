import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";
import ReactMarkdown from "react-markdown";
import IntroMd from "./README.md";


function InlineCodeBlock(props) {
  return <span style={{ background: "#ff0" }}>{props.value}</span>;
}

function BlockQuoteBlock(props) {
    return (
        <div style={{border: '1px dashed #aaa', borderRadius: 10, paddingLeft: 1}}>
            {props.children}
        </div>
    );
}


function CodeBlock(props) {
    return (
        <pre style={{background: '#000', color: '#fff', padding: 10}}>
            <code>
                {props.value}
            </code>
        </pre>
    );
}
class TeamPage extends Component {
  constructor() {
    super();
    this.state = { markdown: "" };
  }

  componentWillMount() {
    fetch(IntroMd)
      .then(res => res.text())
      .then(text => this.setState({ markdown: text }));
  }

  render() {
    const { markdown } = this.state;
    return (
      <div>
        <Container style={{ marginTop: "7em" }}>
          <Header as="h1">팀 소개 페이지</Header>
          <ReactMarkdown
            source={markdown}
            skipHtml={false}
            escapeHtml={false}
            renderers={{
              inlineCode: InlineCodeBlock,
              code: CodeBlock,
              blockquote: BlockQuoteBlock
            }}

          />
        </Container>
      </div>
    );
  }
}

export default TeamPage;
