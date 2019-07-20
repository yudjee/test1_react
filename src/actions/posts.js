export const deletePost = id => ({
  type: 'DELETE_POST',
  payload: id,
});

export const openComments = id => ({
  type: 'OPEN_COMMENTS',
  payload: id,
});

export const closeComments = id => ({
  type: 'CLOSE_COMMENTS'
});