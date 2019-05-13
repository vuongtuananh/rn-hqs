import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Image } from 'react-native';

import { screens, theme } from '../constants';

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
            height: theme.sizes.base * 4,
            backgroundColor: theme.colors.white, // or 'white
            borderBottomColor: "transparent",
            elevation: 0, // for android
        },
        headerBackImage: <Image source={require('../../assets/icons/back.png')} />,
        headerBackTitle: null,
        headerLeftContainerStyle: {
            alignItems: 'center',
            marginLeft: theme.sizes.base * 2,
            paddingRight: theme.sizes.base,
        },
        headerRightContainerStyle: {
            alignItems: 'center',
            paddingRight: theme.sizes.base,
        },
    },
});

export default AppNavigation =  createAppContainer(appScreens);