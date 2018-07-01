import React from "react";
import { AppRegistry, Text, View } from "react-native";
import Navigator from "./Navigator";

class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <Text style={{ fontSize: 100 }}>HI</Text> */}
        <Navigator />
      </View>
    );
  }
}

AppRegistry.registerComponent("bazar", () => App);

export default App;
