import createDataContext from "./createData.context";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "edit_blogpost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    try {
      dispatch({ type: "add_blogpost", payload: { title, content } });
      if (callback) {
        callback();
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    try {
      dispatch({ type: "edit_blogpost", payload: { id, title, content } });
      if (callback) {
        callback();
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  {
    addBlogPost,
    editBlogPost,
    deleteBlogPost,
  },
  [
    {
      title: "Blog Post #1",
      id: 1,
      content: "This is the body of post id: 1 ",
    },
    {
      title: "Blog Post #2",
      id: 2,
      content: "This is the body of post id: 2 ",
    },
    {
      title: "Blog Post #3",
      id: 3,
      content: "This is the body of post id: 3 ",
    },
    {
      title: "Blog Post #4",
      id: 4,
      content: "This is the body of post id: 4 ",
    },
    {
      title: "Blog Post #5",
      id: 5,
      content: "This is the body of post id: 5 ",
    },
    {
      title: "Blog Post #6",
      id: 6,
      content: "This is the body of post id: 6 ",
    },
    {
      title: "Blog Post #7",
      id: 7,
      content: "This is the body of post id: 7 ",
    },
  ]
);
