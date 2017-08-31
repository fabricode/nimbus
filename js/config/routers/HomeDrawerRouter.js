import React, { Component } from "react";
// import Home from "../../views/home/components";
import { DrawerNavigator } from "react-navigation";
import DrawBar from "../../views/drawer/components/DrawBar";

// export default (DrawNav = DrawerNavigator(
//   {
//     Home: { screen: Home },
//   },
//   {
//     contentComponent: props => <DrawBar {...props} />
//   }
// ));

import { View, TouchableOpacity, Text } from "react-native";

class Home extends Component {
  render() {
    return (
      <View>
          <Text>Home</Text>
      </View>
    );
  }
}

export default Home;
