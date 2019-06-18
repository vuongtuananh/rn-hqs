import React, { Component } from 'react';
import { AsyncStorage } from "react-native";
import { Block, Button, Text } from '../components';
import { strings } from '../constants';

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    _handleLogOut = () => {
        AsyncStorage.clear();
        this.props.navigation.navigate(strings.appScreens.Login)
    }
    render() {
        return (
            <Block center middle>
                <Button
                    onPress={this._handleLogOut}
                >
                    <Text center gray>Logout</Text>
                </Button>
            </Block>
        );
    }
}
export default Settings;