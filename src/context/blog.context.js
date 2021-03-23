import createDataContext from "./createData.context";

import jsonServer from "../api/jsonServer.api";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogpost":
      return action.payload;
    case "edit_blogpost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload.id);
    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogposts");
    dispatch({ type: "get_blogpost", payload: response.data });
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    try {
      await jsonServer.post("/blogposts", { title, content });
      if (callback) {
        callback();
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    try {
      await jsonServer.put(`/blogposts/${id}`, { title, content });
      // const response = await jsonServer.post(`/blogposts/${id}`);
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
  return async (id) => {
    try {
      await jsonServer.delete(`/blogposts/${id}`);
      dispatch({ type: "delete_blogpost", payload: { id } });
      if (callback) {
        callback();
      }
    } catch (error) {}
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  {
    addBlogPost,
    editBlogPost,
    deleteBlogPost,
    getBlogPosts,
  },
  []
);
//     {
//       title: "Blog Post #1",
//       id: 1,
//       content: "This is the body of post id: 1 ",
//     },
//     {
//       title: "Blog Post #2",
//       id: 2,
//       content: "This is the body of post id: 2 ",
//     },
//     {
//       title: "Blog Post #3",
//       id: 3,
//       content: "This is the body of post id: 3 ",
//     },
//     {
//       title: "Blog Post #4",
//       id: 4,
//       content: "This is the body of post id: 4 ",
//     },
//     {
//       title: "Blog Post #5",
//       id: 5,
//       content: "This is the body of post id: 5 ",
//     },
//     {
//       title: "Blog Post #6",
//       id: 6,
//       content: "This is the body of post id: 6 ",
//     },
//     {
//       title: "Blog Post #7",
//       id: 7,
//       content: "This is the body of post id: 7 ",
//     },
//   ]
// );
