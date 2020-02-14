import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readMember, unloadMember } from '../../modules/member';
import MemberDetail from '../../components/member/MemberDetail';

const MemberDetailContainer = ({ match }) => {
    // 처음 마운트될 때 포스트 읽기 API 요청
    const { pId } = match.params;
    const dispatch = useDispatch();
    const { politician, error, loading } = useSelector(
        ({ member, loading }) => ({
            politician: member.politician,
            error: member.error,
            loading: loading['member/READ_MEMBER']
        }),
    );

    useEffect(() => {
        dispatch(readMember(pId));
        // 언마운트될 때 리덕스에서 포스트 데이터 없애기
        return () => {
            dispatch(unloadMember());
        };
    }, [dispatch, pId]);

    return (
        <MemberDetail
            politician={politician}
            loading={loading}
            error={error}
        />
    );
};

export default withRouter(MemberDetailContainer);
