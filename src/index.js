import React from "react";
import { View, StatusBar, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={"transparent"}
        barStyle={"light-content"}
        translucent
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00C08D",
    flex: 1
  }
});
