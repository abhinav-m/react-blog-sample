export const ADD_BLOG_POST = "ADD_BLOG_POST";
export const addBlogPost = input => ({
  type: ADD_BLOG_POST,
  payload: input.data
});

export const REMOVE_BLOG_POST = "REMOVE_BLOG_POST";
export const removeBlogPost = input => ({
  type: REMOVE_BLOG_POST,
  payload: input.data
});
