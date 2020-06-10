import React, { Component } from "react";
import axios from "axios";

// 댓글 입력하는 창
export default class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: "",

      comment: {
        pId: parseInt(props.pId),
        uName: sessionStorage.getItem("nick"),
        uMail: sessionStorage.getItem("mail"),
        pCommentContent: ""
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
      this.setState({ error: "모든 칸을 채워주세요!" });
      return;
    }

    // loading status and clear error
    this.setState({ error: "", loading: true });

    // persist the comments on server
    let { comment } = this.state;
    console.log(comment);

    axios({
      method: "post",
      url: "http://52.79.219.137:80/pcomment",
      params: {
        pId: comment.pId,
        uMail: comment.uMail,
        uName: comment.uName,
        pCommentContent: comment.pCommentContent
      }
    })
      .then(res => {
        console.log(res);
        if (res.error) {
          this.setState({ loading: false, error: res.error });
          console.log(res.error);
        } else {
          // add time return from api and push comment to parent state
          comment.writeDate = res.writeDate;
          this.props.addComment(comment);

          this.setState({
            loading: false,
            comment: { ...comment, pCommentContent: "" }
          });
        }
      })
      .catch(err => {
        this.setState({
          error: "지금은 댓글을 남길 수 없어요",
          loading: false
        });
        console.log(err);
      });
  }

  isFormValid() {
    return (
      this.state.comment.uName !== "" &&
      this.state.comment.pCommentContent !== ""
    );
  }

  renderError() {
    return this.state.error ? (
      <div className="alert alert-danger">{this.state.error}</div>
    ) : null;
  }

  render() {
    return (
      <React.Fragment>
        {sessionStorage.getItem("nick") ? (
          <form method="post" onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                value={sessionStorage.getItem("nick")}
                className="form-control"
                name="uName"
                type="text"
                disabled
              />
            </div>

            <div className="form-group">
              <textarea
                onChange={this.handleFieldChange}
                value={this.state.comment.pCommentContent}
                className="form-control"
                placeholder="내용을 작성해주세요."
                name="pCommentContent"
                rows="5"
              />
            </div>
            {this.renderError()}

            <div className="form-group">
              <button disabled={this.state.loading} className="btn btn-primary">
                댓글남기기 &#10148;
              </button>
            </div>
          </form>
        ) : (
          <div>
            <div className="form-group">
              <input
                placeholder="로그인을 해 주세요."
                className="form-control"
                name="uName"
                type="text"
                disabled
              />
            </div>

            <div className="form-group">
              <textarea
                onChange={this.handleFieldChange}
                value={this.state.comment.pCommentContent}
                className="form-control"
                name="pCommentContent"
                rows="5"
                disabled
              />
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
