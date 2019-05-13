import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Image } from 'react-native';

import { screens, themes } from '../constants';

import Welcome from "../screens/Welcome";
import Browse from "../screens/Browse";
import ForgotPassword from "../screens/ForgotPassword";
import Login from "../screens/Login";
import Products from "../screens/Products";
import Settings from "../screens/Settings";
import SignUp from "../screens/SignUp";

const appScreens = createStackNavigator({
    Welcome,
    Browse,
    ForgotPassword,
    Login,
    Products,
    Settings,
    SignUp,
}, {
    initialRouteName: 'Welcome',
    defaultNavigationOptions: {
        headerStyle: {
            height: themes.sizes.base * 4,
            backgroundColor: themes.Colors.white, // or 'white
            borderBottomColor: "transparent",
            elevation: 0, // for android
        },
        headerBackImage: <Image source={require('../../assets/icons/back.png')} />,
        headerBackTitle: null,
        headerLeftContainerStyle: {
            alignItems: 'center',
            marginLeft: themes.sizes.base * 2,
            paddingRight: themes.sizes.base,
        },
        headerRightContainerStyle: {
            alignItems: 'center',
            paddingRight: themes.sizes.base,
        },
    },
});

export default AppNavigation =  createAppContainer(appScreens);