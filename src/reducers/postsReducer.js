import postConstants from '../constants/postConstants';

const initialState = {
  posts: [],
  post: {},
  loading: false,
};

function postsReducer(state = initialState, action) {
  switch (action.type) {
    case postConstants.CREATE_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case postConstants.CREATE_POST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case postConstants.CREATE_POST_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: true,
      };
    case postConstants.GET_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case postConstants.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case postConstants.GET_POST_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
}

export default postsReducer;
