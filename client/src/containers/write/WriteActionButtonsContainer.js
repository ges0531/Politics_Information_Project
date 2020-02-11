import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { writePost, updatePost } from '../../modules/write';

const WriteActionButtonsContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { title, content, tags, post, postError, originalPostId, uMail, uName } = useSelector(
    ({ write, auth }) => ({
      title: write.title,
      content: write.content,
      tags: write.tags,
      post: write.post,
      postError: write.postError,
      originalPostId: write.originalPostId,
      uMail: auth.uMail,
      uName: auth.uName
    }),
  );

  // 포스트 등록
  const onPublish = () => {
    console.log('originalPostId')
    console.log(originalPostId)
    if (originalPostId) {
      // dispatch(updatePost({ title, content, tags, id: originalPostId }));
      dispatch(updatePost({ title, content, id: originalPostId }));
      return;
    }
    dispatch(
      writePost({
        title,
        content,
        uMail,
        uName
        // tags,
      }),
    );
  };

  // 취소
  const onCancel = () => {
    history.goBack();
  };

  // 성공 혹은 실패시 할 작업
  useEffect(() => {
    if (post) {
      const { bodId } = post.bodId;
      // history.push(`/${bodId}`);
      history.push('/PostListPage')
    }
    if (postError) {
      console.log(postError);
    }
  }, [history, post, postError]);
  return (
    <WriteActionButtons
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit={!!originalPostId}
    />
  );
};

export default withRouter(WriteActionButtonsContainer);
