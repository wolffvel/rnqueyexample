import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { useHistory } from "react-router-native";

const Home = () => {
  const history = useHistory();
  return (
    <View style={styles.container}>
      <Button title="use query" onPress={() => history.push("/query")} />
      <Button title="use mutation" onPress={() => history.push("/mutation")} />
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

export default Home;
