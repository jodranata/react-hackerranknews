import { ADD_POST, FETCH_API_ERROR } from '../constants/actionConstants';

const INITIAL_STATE = {
  posts: [],
  error: null,
};

const reduceAddStory = (state, action) => ({
  posts: action.post,
  error: null,
});

const reduceHandleError = (state, action) => ({
  posts: [],
  error: action.error,
});

export default function availablePostReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_POST: {
      return reduceAddStory(state, action);
    }
    case FETCH_API_ERROR: {
      return reduceHandleError(state, action);
    }
    default: {
      return state;
    }
  }
}
