import React, { Component } from "react";
import Login from "../../views/login/components";
import Home from "../../views/home/components";
import HomeDrawerRouter from "./HomeDrawerRouter";
import { StackNavigator } from "react-navigation";

HomeDrawerRouter.navigationOptions = ({ navigation }) => ({
  header: null
});
export default (StackNav = StackNavigator({
  Login: { screen: Login },
  Home: { screen: Home },
}));
