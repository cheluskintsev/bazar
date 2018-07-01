import React from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

class HeaderRight extends React.Component {
  _getIconName = () => {
    const { navigation } = this.props;
    const { state = {} } = navigation;
    const { index } = state;

    switch (index) {
      case 3:
        return "cogs";
      default:
        return null;
    }
  };

  _onPress = () => {
    const { navigation } = this.props;
    const { state = {} } = navigation;
    const { index } = state;

    switch (index) {
      case 3:
        return navigation.navigate("Settings");
      default:
        return undefined;
    }
  };

  render() {
    const iconName = this._getIconName();

    return iconName ? (
      <TouchableOpacity onPress={this._onPress} style={{ marginRight: 16 }}>
        <Icon name={iconName} type="font-awesome" color="black" />
      </TouchableOpacity>
    ) : null;
  }
}

export default HeaderRight;
