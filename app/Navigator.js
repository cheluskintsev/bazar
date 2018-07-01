import React from "react";
import { View, Platform, StatusBar } from "react-native";
import { Icon } from "react-native-elements";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import StoreView from "./StoreView";
import SearchView from "./SearchView";
import FavoritesView from "./FavoritesView";
import ProfileView from "./ProfileView";
import SettingsView from "./SettingsView";

const BottomNavigator = createBottomTabNavigator(
  {
    Store: { screen: StoreView },
    Search: { screen: SearchView },
    Favorites: { screen: FavoritesView },
    Profile: { screen: ProfileView }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case "Store":
            return (
              <Icon type="font-awesome" name="shopping-bag" color="black" />
            );
          case "Search":
            return <Icon type="font-awesome" name="search" color="black" />;
          case "Favorites":
            return <Icon type="font-awesome" name="heart" color="black" />;
          case "Profile":
            return <Icon type="font-awesome" name="user" color="black" />;
          default:
            null;
        }
        return <Icon type="font-awesome" name={iconName} color="black" />;
      },
      tabBarOptions: {
        showLabel: false
      }
    })
  }
);

export const AppStack = createStackNavigator(
  {
    Main: {
      screen: BottomNavigator
    },
    Settings: { screen: SettingsView }
  },
  {
    mode: "card",
    headerMode: Platform.OS === "ios" ? "float" : "screen",
    initialRouteName: "Main"
  }
);

class Navigator extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <StatusBar /> */}
        <AppStack />
        {/* <BottomTabNavigator /> */}
      </View>
    );
  }
}

export default Navigator;
