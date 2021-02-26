import React from "react";
import FloatingButton from "./components/FloatingButton";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FloatingButton style={{ bottom: 15 }}></FloatingButton>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // justifyContent: "center",
  },
});
