import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import { useHistory } from "react-router-native";

const Mutation = () => {
  const history = useHistory();
  return (
    <View style={styles.container}>
      <Text>Mutation</Text>
      <Button title="back" onPress={() => history.push("/")} />
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

export default Mutation;
