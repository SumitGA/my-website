import axios from 'axios';

function getPosts() {
  const requestOptions = {
    method: 'GET',
  };

  return axios('http://jsonplaceholder.typicode.com/posts?_page=1&_limit=5', requestOptions);
}

const postServices = {
  getPosts,
};

export default postServices;
