import React from "react";
import { SafeAreaView, Button, StyleSheet } from "react-native";
import { useHistory } from "react-router-native";
import PostList from "../containers/PostList";

const Query = () => {
  const history = useHistory();
  return (
    <SafeAreaView style={styles.container}>
      <Button title="back" onPress={() => history.push("/")} />
      <PostList />
    </SafeAreaView>
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
