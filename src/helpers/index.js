
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

//  collects methods required for request handling
const requestMethods = {
  request,
  success,
  failure,
};

// exports requestMethods
export default requestMethods;
