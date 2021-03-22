import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";

import { Context } from "../context/blog.context";

const BlogPostForm = ({ navigation, onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        style={styles.textInputStyle}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        value={content}
        onChangeText={setContent}
        style={styles.textInputStyle}
      />
      <Button
        title="Save Blog Post"
        onPress={() => {
          onSubmit(title, content);
        }}
      />
      <Button
        color="red"
        title="Discard Changes"
        onPress={() => {
          // navigation.navigate("Index");
          return null;
        }}
      />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
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

export default BlogPostForm;
