import React from "react";
import { StyleSheet, View, Button } from "react-native";
import ReactQueryProvider from "./providers/ReactQueryProvider";
import Routes from "./routes";

export default function App() {
  return (
    <ReactQueryProvider>
      <Routes />
    </ReactQueryProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
