import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Post = ({ title, body }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: "#e2e2e2",
    width: 200,
    height: 300,
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 10,
  },
});

export default Post;
