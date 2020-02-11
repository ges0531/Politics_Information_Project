import qs from 'qs';
import client from './client';

// export const writePost = ({ title, body, tags }) =>
//   client.post('/bod', { title:title, content:body, tags });

export const writePost = ({ title, content, uMail, uName }) =>
  client.post('/bod', { title:title, content:content, uMail:uMail, uName:uName }).then(res=>console.log(res));

// export const readPost = bodId => client.get(`/bod/${bodId}`);

// export const listPosts = ({ page, uName, tag }) => {
//   const queryString = qs.stringify({
//     page,
//     uName,
//     tag,
//   });
//   return client.get(`/bod?${queryString}`);
// };

export const listPosts = () => client.get('/bod');

// export const updatePost = ({ id, title, body, tags }) =>
// export const updatePost = ({ bodId, title, content }) =>
//   client.patch(`/bod/${bodId}`, {
//     title:title,
//     content:content,
//     // tags,
//   });

// export const removePost = bodId => client.delete(`/bod/${bodId}`);
