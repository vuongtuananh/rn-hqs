import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
   }
   render() {
       return (
           <View style={styles.container}>
               <Text>Login</Text>
           </View>
       );
   }
}
export default Login;

const styles = StyleSheet.create({
   container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
   }
});