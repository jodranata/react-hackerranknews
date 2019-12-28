import { call, put } from 'redux-saga/effects';
import { addingPost } from '../actions/actionsAddingPost';
import handlingError from '../actions/actionHandlingFetchError';

const HN_API = `http://hn.algolia.com/api/v1/search?query=`;
const fetchedAPI = query => fetch(HN_API + query).then(res => res.json());

export default function* handleFetched(action) {
  const { query } = action;
  try {
    const result = yield call(fetchedAPI, query);
    yield put(addingPost(result.hits));
  } catch (error) {
    yield put(handlingError(error));
  }
}
