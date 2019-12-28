import { FETCH_API, ADD_POST } from '../constants/actionConstants';

export const addingPost = post => ({
  type: ADD_POST,
  post,
});

export const fetchingPost = query => ({
  type: FETCH_API,
  query,
});
