import React, { useContext } from "react";
import { StyleSheet } from "react-native";

import BlogPostForm from "../components/BlogPostForm.component";

import { Context } from "../context/blog.context";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.pop());
      }}
    />
  );
};

CreateScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Create A New Blog Post",
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

export default CreateScreen;
