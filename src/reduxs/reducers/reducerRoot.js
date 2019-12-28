import { combineReducers } from 'redux';
import availablePostReducer from './reducerAvailablePost';
import archivePostReducer from './reducerArchivedPost';

const rootReducer = combineReducers({
  availablePost: availablePostReducer,
  archivePost: archivePostReducer,
});

export default rootReducer;
