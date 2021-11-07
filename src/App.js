import React from "react";
import { marked } from "../node_modules/marked/lib/marked.esm.js";
import defaultMarkdown from "./DefaultMarkdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import './index.css'

const mdOptions = {
  // whether to conform to original MD implementation
  pedantic: false,
  // Github Flavoured Markdown
  gfm: true,
  // tables extension
  sanitize: true,
  breaks: true,
};

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: defaultMarkdown,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  getMarkdownText() {
    var rawMarkup = marked((this.state.input), mdOptions);
    return { __html: rawMarkup };
  }

  render() {
    
    const containerStyle = {
      // "border": "1px solid black",
      "marginTop": "20px"
    }

    const textAreaStyle = {
      "minHeight": "350px",
      "height": "89%",
      "maxHeight": "90vh",

    }

    const previewStyle = {
      "maxHeight": "90vh"
    }

    const editorStyle = {
      "maxHeight": "90vh"
    }

    const parsedStyle = {
      "overflow": "scroll",
      "height": "89%",
      "backgroundColor":"white",
      "padding": "20px"
  }

    return (
      <Container style={containerStyle}>
        <Row>
          <Col xs={12} lg={6} className="" style={editorStyle}>
            <h2>Markup editor</h2>
            <textarea
              id="editor"
              placeholder="Enter your markup here"
              value={this.state.input}
              onChange={this.handleChange}
              style={textAreaStyle}
              className="w-100"
            ></textarea>
          </Col>
          <Col xs={12} lg={6} className="" style={previewStyle}>
          <h2>Parsed result</h2>
            <div id="preview" dangerouslySetInnerHTML={this.getMarkdownText()} className="" style={parsedStyle} />
          </Col>
        </Row>
        
        
          <p id="credits">
            Created by <a href="https://mikeolivotto.com">Mike Olivotto</a>
          </p>
      </Container>
    );
  }
}

export default MarkdownEditor;
