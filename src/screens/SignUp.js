import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
   }
   render() {
       return (
           <View style={styles.container}>
               <Text>SignUp</Text>
           </View>
       );
   }
}
export default SignUp;

const styles = StyleSheet.create({
   container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
   }
});