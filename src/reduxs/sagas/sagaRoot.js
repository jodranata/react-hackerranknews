import { takeEvery, all } from 'redux-saga/effects';
import { FETCH_API } from '../constants/actionConstants';
import handleFetched from './sagaFetchPost';

export default function* watchAll() {
  yield all([takeEvery(FETCH_API, handleFetched)]);
}
