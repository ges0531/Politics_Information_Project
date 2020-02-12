import React from 'react'
import { Button, Comment, Form, Header, Icon } from 'semantic-ui-react'

const CommentExampleThreaded = () => (
  <Comment.Group threaded>
    <Header as='h3' dividing>
    <Icon name="comments outline"/>
      국회의원 [ 문 재 인 ] 에게 한마디
    </Header>

    <Comment>
      <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>임희선</Comment.Author>
        <Comment.Metadata>
          <span>오늘 오후 5:42</span>
        </Comment.Metadata>
        <Comment.Text>응원합니다!</Comment.Text>
        <Comment.Actions>
          <a>답글달기</a>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Comment>
      <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>김은수</Comment.Author>
        <Comment.Metadata>
          <span>어제 오전 12:30</span>
        </Comment.Metadata>
        <Comment.Text>
          <p>맛집 많이 만들어주세요</p>
        </Comment.Text>
        <Comment.Actions>
          <a>답글달기</a>
        </Comment.Actions>
      </Comment.Content>

      <Comment.Group>
        <Comment>
          <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
          <Comment.Content>
            <Comment.Author as='a'>박지홍</Comment.Author>
            <Comment.Metadata>
              <span>방금 전</span>
            </Comment.Metadata>
            <Comment.Text>맛집 알려주세요</Comment.Text>
            <Comment.Actions>
              <a>답글달기</a>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Comment>

    <Comment>
      <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>이훈</Comment.Author>
        <Comment.Metadata>
          <span>5일 전</span>
        </Comment.Metadata>
        <Comment.Text>뻬뻬뻬뻬뻬</Comment.Text>
        <Comment.Actions>
          <a>답글달기</a>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Form reply>
      <Form.TextArea />
      <Button content='댓글 달기' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>
)

export default CommentExampleThreaded