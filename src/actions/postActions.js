import postConstants from '../constants/postConstants';
import postServices from '../services/postServices';

function request(actionType) {
  return {
    type: actionType,
  };
}

function success(actionType, data) {
  return {
    type: actionType,
    payload: data,
  };
}

function failure(actionType, error) {
  return {
    type: actionType,
    payload: error,
  };
}

function getPosts() {
  return (dispatch) => {
    dispatch(request(postConstants.GET_POSTS_REQUEST));
    postServices.getPosts()
      .then(
        posts => dispatch(success(postConstants.GET_POSTS_SUCCESS, posts)),
        (error) => {
          dispatch(failure(error));
          // dispatch(alertActions.error(error));
        },
      );
  };
}

const postActions = {
  getPosts,
};

export default postActions;
