import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleWare from 'redux-saga';
import rootReducer from '../reducers/reducerRoot';
import rootSaga from '../sagas/sagaRoot';

const logger = createLogger();
const saga = createSagaMiddleWare();

const store = createStore(rootReducer, undefined, applyMiddleware(logger, saga));
saga.run(rootSaga);
export default store;
