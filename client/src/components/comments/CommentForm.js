import React, { Component } from "react";
import Axios from "axios";

export default class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: "",

      comment: {
        pCommentContent: "",
        pId:"1",
        uMail: localStorage.getItem('mail'),
        uName: localStorage.getItem('nick'),
        writeDate:"20200212"
      }
    };

    // bind context to methods
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
   * Handle form input field changes & update the state
   */
  handleFieldChange = event => {
    const { value, name } = event.target;

    this.setState({
      ...this.state,
      comment: {
        ...this.state.comment,
        [name]: value
      }
    });
  };

  /**
   * Form submit handler
   */
  onSubmit(e) {
    // prevent default form submission
    e.preventDefault();

    if (!this.isFormValid()) {
      this.setState({ error: "All fields are required." });
      return;
    }

    // loading status and clear error
    this.setState({ error: "", loading: true });

    // persist the comments on server
    let { comment } = this.state;
    console.log(comment);
    Axios.post(`http://70.12.247.60:8000/pcomment`, {comment})
    .then(res=>console.log(res))
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          this.setState({ loading: false, error: res.error });
        } else {
          // add time return from api and push comment to parent state
          // comment.writeDate = res.writeDate;
          this.props.addComment(comment);

          // clear the message box
          this.setState({
            loading: false,
            comment: { ...comment, pCommentContent: ""}
          });
        }
      })
      .catch(err => {
        this.setState({
          error: "Something went wrong while submitting form.",
          loading: false
        });
      });
  }

  /**
   * Simple validation
   */
  isFormValid() {
    return this.state.comment.uName !== "" && this.state.comment.pCommentContent !== "";
  }

  renderError() {
    return this.state.error ? (
      <div className="alert alert-danger">{this.state.error}</div>
    ) : null;
  }

  render() {
    return (
      <React.Fragment>
        <form method="post" onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              onChange={this.handleFieldChange}
              value={this.state.comment.uName}
              className="form-control"
              name="uName"
              type="text"
            />
          </div>

          <div className="form-group">
            <textarea
              onChange={this.handleFieldChange}
              value={this.state.comment.pCommentContent}
              className="form-control"
              placeholder="🤬 Your Comment"
              name="pCommentContent"
              rows="5"
            />
          </div>

          {this.renderError()}

          <div className="form-group">
            <button disabled={this.state.loading} className="btn btn-primary">
              Comment &#10148;
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
