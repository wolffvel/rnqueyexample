import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import { useHistory } from "react-router-native";
import CommentList from "../containers/CommentList";

const CustomHook = () => {
  const history = useHistory();
  return (
    <View style={styles.container}>
      <Button title="back" onPress={() => history.push("/")} />
      <CommentList />
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

export default CustomHook;
