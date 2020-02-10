import qs from 'qs';
import client from './client';

// export const writePost = ({ title, body, tags }) =>
//   client.post('/bod', { title:title, content:body, tags });

export const writePost = ({ title, body, uMail, uName }) =>
  client.post('/bod', { title:title, content:body, uMail:uMail, uName:uName });

// export const readPost = id => client.get(`/bod/${id}`);
export const readPost = id => client.get('/bod', {
  params: {
    bodId:id
  }
});

// export const listPosts = ({ page, uName, tag }) => {
//   const queryString = qs.stringify({
//     page,
//     uName,
//     tag,
//   });
//   return client.get(`/bod?${queryString}`);
// };

export const listPosts = () => client.get('/bod');

export const updatePost = ({ id, title, body, tags }) =>
  client.patch(`/bod/${id}`, {
    title:title,
    content:body,
    tags,
  });

export const removePost = id => client.delete(`/bod/${id}`);
