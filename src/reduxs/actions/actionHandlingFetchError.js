import { FETCH_API_ERROR } from '../constants/actionConstants';

const handlingError = error => ({
  type: FETCH_API_ERROR,
  error,
});

export default handlingError;
