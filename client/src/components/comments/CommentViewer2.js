import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pId: parseInt(props.pId), // 전달받은 pId
      pname: props.pname, // 전달받은 pname
      comments: [], // 댓글 목록
      loading: false
    };

    this.addComment = this.addComment.bind(this);
  }

  componentDidMount() {
    // loading
    this.setState({ loading: true });
    
    let { pId } = this.state;
    // get all the comments  
    fetch(`http://52.79.219.137:80/pcomment/${pId}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          comments: res, // 불러온 댓글 배열을 저장
          loading: false
        });
      })
      .catch(err => {
        this.setState({ loading: false });
      });

  }

  /**
   * Add new comment
   * @param {Object} comment
   */
  addComment(comment) {
    this.setState({
      loading: false,
      comments: [...this.state.comments, comment]
    });
  }

  render() {
    return (
       <div className="App container bg-light shadow">
        <div className="row">
          <div className="col-4  pt-3 border-right">
            <h6><b>{this.props.pname}</b>에 대해서 이야기해주세요</h6>
            <CommentForm addComment={this.addComment} pId={this.props.pId}/>
          </div>
          <div className="col-8  pt-3 bg-white">
            <CommentList
              loading={this.state.loading}
              comments={this.state.comments}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;