import axios from 'axios'

axios.defaults.baseURL = 'http://0.0.0.0:8000'; // local
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
// axios.defaults.withCredentials = true;

// 共通関数
export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST'
const getPostsRequest = () => {
  return {
    type: GET_POSTS_REQUEST
  }
}

export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
const getPostsSuccess = (json) => {  
  return {
    type: GET_POSTS_SUCCESS,
    posts: json,
    receivedAt: Date.now()
  }
}

export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'
const getPostsFailure = (error) => {
  return {
    type: GET_POSTS_FAILURE,
    error
  }
}

// 個別関数
export const login = (state) => {
  return (dispatch) => {
    dispatch(getPostsRequest())
    return axios.post(axios.defaults.baseURL + `/login`, {params: {email: state.email, password: state.password}})
      .then(res =>
        dispatch(getPostsSuccess(res.data))
      ).catch(err => 
        dispatch(getPostsFailure(err))
      )
  }
}

export const getPosts = () => {
  return (dispatch) => {
    dispatch(getPostsRequest())
    return axios.get(`http://0.0.0.0:8000/user`)
      .then(res =>
        dispatch(getPostsSuccess(res.data))
      ).catch(err => 
        dispatch(getPostsFailure(err))
      )
  }
}