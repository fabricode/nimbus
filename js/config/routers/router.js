import React from "react";
import { StackNavigator,TabNavigator } from "react-navigation";
import { FontAwesome } from "react-native-vector-icons";

import Auth from "../../views/auth/containers";

import Jobs from "../../views/jobs/components";
import Review from "../../views/review/components";

export const SignedOut = StackNavigator({
  SignIn: {
    screen: Auth,
    navigationOptions: {
      title: "Sign In"
    }
  }
});

export const SignedIn = TabNavigator({
  Jobs: {
    screen: Jobs,
    navigationOptions: {
      tabBarLabel: "Jobs",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="home" size={30} color={tintColor} />
      )
    }
  },
  Review: {
    screen: Review,
    navigationOptions: {
      tabBarLabel: "Review",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="user" size={30} color={tintColor} />
      )
    }
  }
});
