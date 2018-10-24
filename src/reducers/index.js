import ADD_BLOG_POST from "../actions";
import REMOVE_BLOG_POST from "../actions";

const initialState = {
  blogs: [
    {
      id: 0,
      title: "First blog post",
      content: "Content of first blog post."
    },
    {
      id: 1,
      title: "Second blog post",
      content: "Content of second blog post."
    },
    {
      id: 2,
      title: "Third blog post",
      content: "Content of third blog post."
    }
  ]
};

const blogPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BLOG_POST:
      let { blogs } = state;
      blogs = blogs.concat(payload);
      return { ...initialState, blogs };

    case REMOVE_BLOG_POST:
      const { id } = payload;
      let { blogs } = state;
      blogs = blogs.filter(blogPost => blogPost.id !== id);
      return { ...initialState, blogs };

    default:
      return state;
  }
};
