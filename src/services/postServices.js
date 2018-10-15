import axios from 'axios';

function getPosts() {
  const requestOptions = {
    method: 'GET',
  };

  return axios('https://jsonplaceholder.typicode.com/posts', requestOptions);
}

const postServices = {
  getPosts,
};

export default postServices;
