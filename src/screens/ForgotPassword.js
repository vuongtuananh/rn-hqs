import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
   }
   render() {
       return (
           <View style={styles.container}>
               <Text>ForgotPassword</Text>
           </View>
       );
   }
}
export default ForgotPassword;

const styles = StyleSheet.create({
   container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
   }
});