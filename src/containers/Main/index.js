import React, { Component } from "react";
import { View, StatusBar, StyleSheet } from "react-native";

export default class MainContainer extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={"transparent"}
          barStyle={"light-content"}
          translucent
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00C08D",
    flex: 1
  }
});
