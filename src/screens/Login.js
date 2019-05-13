import React, { Component } from 'react';
import { ActivityIndicator, Keyboard, KeyboardAvoidingView, StyleSheet } from 'react-native'

import { Button, Block, Input, Text } from '../components';
import { theme, messages } from "../constants";

const VALID_EMAIL = messages.appMessages.EMAIL_PLACEHOLDER;
const VALID_PASSWORD = messages.appMessages.PASSWORD_PLACEHOLDER;
const { 
    LOGIN, 
    EMAIL_PLACEHOLDER, 
    PASSWORD_PLACEHOLDER ,
    EMAIL,
    PASSWORD,
    FORGOT_PASSWORD,
} = messages.appMessages;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: VALID_EMAIL,
            password: VALID_PASSWORD,
            errors: [],
            isLoading: false,
         };
    }

    handleLogin = () => {
        const { email, password } = this.state;
        const { navigation } = this.props;
        const errors = [];

        Keyboard.dismiss();
        
        this.setState({
            isLoading: true
        });

        if(!email || email !== VALID_EMAIL) errors.push(EMAIL);
        if(!password || password !== VALID_PASSWORD) errors.push(PASSWORD);

        setTimeout(() => {
            this.setState({
                errors,
                isLoading: false
            });
            if(errors.length < 1) navigation.navigate('Browse');
        }, 1000)
    }
    render() {
        const { navigation } = this.props;
        const { isLoading, errors } = this.state;
        const hasErrors = key => errors.includes(key) ? styles.hasErrors : null;
        return (
            <KeyboardAvoidingView style={styles.container} behavior='padding'>
                <Block padding={[0, theme.sizes.base * 2]}>
                    <Text h1 bold>{ LOGIN }</Text>

                    <Block middle>
                        <Input
                            email
                            style={[styles.input, hasErrors(EMAIL)]}
                            label={EMAIL}
                            error={hasErrors(EMAIL)}
                            defaultValue={this.state.email}
                            placeholder={EMAIL_PLACEHOLDER}
                            onChangeText={(text) => this.setState({email: text})}
                        />
                        <Input
                            secure
                            style={[styles.input, hasErrors(PASSWORD)]}
                            label={PASSWORD}
                            error={hasErrors(PASSWORD)}
                            defaultValue={this.state.password}
                            onChangeText={(text) => this.setState({password: text})}
                        />

                        <Button gradient
                            onPress={this.handleLogin} >
                            {
                                isLoading ?
                                <ActivityIndicator size='small' color='white' /> :
                                <Text white center semibold>{LOGIN}</Text>
                            }
                        </Button>
                        <Button onPress={() => {console.log('forgot passowrd')}} >
                            <Text center gray style={{textDecorationLine: 'underline'}}>
                                {FORGOT_PASSWORD}
                            </Text>
                        </Button>
                    </Block>

                </Block>
            </KeyboardAvoidingView>
        );
    }
}
export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        borderWidth: 0,
        borderRadius: 0,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: theme.colors.gray2,
    },
    hasErrors: {
        borderBottomColor: theme.colors.accent
    }
});