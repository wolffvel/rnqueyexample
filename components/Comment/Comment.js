import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Comment = ({ name, email, body }) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{email}</Text>
      <Text>{body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: "#e2e2e2",
    width: 300,
    height: 400,
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 10,
  },
});

export default Comment;
