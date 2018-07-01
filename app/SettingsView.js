import React from "react";
import { Text, View } from "react-native";

class SettingsView extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 40 }}>Settings</Text>
      </View>
    );
  }
}

export default SettingsView;
