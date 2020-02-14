import client from './client';

// 전체 목록 로딩
export const listPoliticians = () =>
  client.get('/politician');

// 검색
export const serch = ({ category , input }) =>
  client.get(`/politicains/${category}/${input}`);


export const getMemberDetail = (pId) => client.get(`/politician/${pId}`);
