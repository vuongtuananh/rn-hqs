import React from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';
import { Image } from 'react-native';

import { strings, theme } from '../constants';

import Welcome from "../screens/Welcome";
import Browse from "../screens/Browse";
import ForgotPassword from "../screens/ForgotPassword";
import Login from "../screens/Login";
import Products from "../screens/Products";
import Settings from "../screens/Settings";
import SignUp from "../screens/SignUp";
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import MyDrawerContent from './MyDrawerContent';
import Dashboard from '../screens/fms/Dashboard';
import Listing from '../screens/fms/Listing';

const defaultHeader = {
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
}

const AppStack = createDrawerNavigator({
    [strings.appScreens.Browse]: Browse,
    [strings.appScreens.Products]: Products,
    [strings.appScreens.Settings]: Settings,
}, {
    initialRouteName: strings.appScreens.Browse,
    drawerWidth: 300,
    drawerPosition: 'left',
    drawerType: 'slide',
    drawerBackgroundColor:'#fff',
    contentComponent: MyDrawerContent,
});

const LoginStack = createStackNavigator({
    [strings.appScreens.Login]: Login,
    [strings.appScreens.SignUp]: SignUp,
    [strings.appScreens.Welcome]: Welcome,
    [strings.appScreens.ForgotPassword]: ForgotPassword,
}, {
    initialRouteName: strings.appScreens.Welcome,
    defaultNavigationOptions: defaultHeader,
});

const FmsStack = createStackNavigator({
    [strings.appScreens.Dashboard]: Dashboard,
    [strings.appScreens.Browse]: Browse,
    [strings.appScreens.Listing]: Listing,
}, {
    initialRouteName: strings.appScreens.Dashboard,
    defaultNavigationOptions: {
        headerStyle: {
            height: theme.dimensions.header.height,
            backgroundColor: theme.colors.gray4,
            borderBottomColor: "transparent",
        },
        headerTitleContainerStyle: {
            alignItems: 'flex-end',
            paddingLeft: theme.sizes.padding,
        },
        headerLeftContainerStyle: {
            alignItems: 'flex-end',
            marginLeft: theme.sizes.padding,
            paddingRight: theme.sizes.base,
        },
        headerRightContainerStyle: {
            alignItems: 'flex-end',
            marginRight: theme.sizes.padding,
        },
    },
    headerLayoutPreset: 'left'
});

const AppContainer = createSwitchNavigator({
    [strings.appScreens.AuthLoading]: AuthLoadingScreen,
    [strings.appScreens.App]: AppStack,
    [strings.appScreens.Login]: LoginStack,
    [strings.appScreens.FmsStack]: FmsStack,
}, {
    initialRouteName: strings.appScreens.FmsStack
});

export default AppNavigation =  createAppContainer(AppContainer);