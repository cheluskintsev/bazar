import React from "react";
import { AppRegistry, Text, View } from "react-native";

class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 100 }}>HI</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent("bazar", () => App);

export default App;
