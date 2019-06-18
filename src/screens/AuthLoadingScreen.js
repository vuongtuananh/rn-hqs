import React, { Component } from 'react';
import { View, AsyncStorage, ActivityIndicator } from 'react-native';
import { strings } from '../constants'

class AuthLoadingScreen extends Component {
    constructor(props) {
        super(props);
        this._checkAuth();
    }

    _checkAuth = async () => {
        const userToken = await AsyncStorage.getItem(strings.appStrings.USER_TOKEN);
        this.props.navigation.navigate(userToken ? strings.appScreens.App : strings.appScreens.Login);
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <ActivityIndicator />
            </View>
        );
    }
}
export default AuthLoadingScreen;