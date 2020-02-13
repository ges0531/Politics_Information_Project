import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MemberList from '../../components/list/MemberList';
import { listPolitians } from '../../modules/list';

const MemberListContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { politicians, error, loading, keyword } = useSelector(
    ({ list, loading }) => ({
      politicians: list.politicians,
      error: list.error,
      keyword: list.keyword,
      loading: loading['list/LIST_POLITICIANS'],
    }),
  );
  useEffect(() => {
    dispatch(listPolitians());
  }, [dispatch, location.search]);

  return (
    <MemberList
      loading={loading}
      error={error}
      politicians={politicians}
      keyword={keyword}
    />
  );
};

export default withRouter(MemberListContainer);
