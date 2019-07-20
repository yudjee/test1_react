export const setPosts = posts => ({
  type: 'SET_POSTS',
  payload: posts
});

export const deletePost = id => ({
  type: 'DELETE_POST',
  payload: id,
});

export const openComments = id => ({
  type: 'OPEN_COMMENTS',
  payload: id,
});

export const closeComments = () => ({
  type: 'CLOSE_COMMENTS'
});

export const deleteComment = (text, id) => ({
  type: 'DELETE_COMMENTS',
  text,
  id,
});