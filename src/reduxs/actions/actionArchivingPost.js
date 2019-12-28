import { ARCHIVE_POST } from '../constants/actionConstants';

// eslint-disable-next-line import/prefer-default-export
export const archivingPost = id => ({
  type: ARCHIVE_POST,
  id,
});
