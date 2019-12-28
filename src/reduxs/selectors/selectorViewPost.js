const notArchived = archiveID => post => archiveID.indexOf(post.objectID) === -1;

export const selectArchive = ({ availablePost, archivePost }) =>
  availablePost.posts.filter(notArchived(archivePost));

export const selectError = ({ availablePost }) => availablePost.error;
