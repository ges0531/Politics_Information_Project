import qs from 'qs';
import client from './client';
import axios from 'axios';

export const writePost = ({ title, content, uMail, uName }) => 
axios ({
  method:"post",
  url:"http://52.79.219.137:80/bod",
  params: {
    title:title,
    content:content,
    uMail:uMail,
    uName:uName
  }
});

export const readPost = bodId => axios.get(`http://52.79.219.137:80/bod/${bodId}`);

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
export const updatePost = ({ bodId, title, content }) =>
  client.patch(`/bod/${bodId}`, {
    title:title,
    content:content,
    // tags,
  });

export const removePost = bodId => client.delete(`/bod/${bodId}`);
