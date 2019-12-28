import { ARCHIVE_POST } from '../constants/actionConstants';

const INITIAL_STATE = [];

const archivedPost = (state, action) => [...state, action.id];

export default function archivePostReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ARCHIVE_POST: {
      return archivedPost(state, action);
    }
    default:
      return state;
  }
}
