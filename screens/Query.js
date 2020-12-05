import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { useHistory } from "react-router-native";
import PostList from "../containers/PostList";

const Query = () => {
  const history = useHistory();
  return (
    <View style={styles.container}>
      <Button title="back" onPress={() => history.push("/")} />
      <PostList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Query;
