import React, { useContext } from "react";
import { StyleSheet } from "react-native";

import BlogPostForm from "../components/BlogPostForm.component";

import { Context } from "../context/blog.context";

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, editBlogPost } = useContext(Context);

  const { title, content } = state.find((blogPost) => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{ title, content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop());
      }}
    />
  );
};

EditScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Edit A Blog Post",
  };
};

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    marginTop: 5,
    marginHorizontal: 10,
    marginBottom: 5,
  },
  textInputStyle: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "grey",
    marginHorizontal: 10,
    marginBottom: 15,
  },
});

export default EditScreen;
