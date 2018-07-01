import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

class ProfileView extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Profile</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Text>GO TO SETTINGS</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ProfileView;
