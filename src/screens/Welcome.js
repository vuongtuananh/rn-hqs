import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
   }
   render() {
       return (
           <View style={styles.container}>
               <Text>Welcome</Text>
           </View>
       );
   }
}
export default Welcome;

const styles = StyleSheet.create({
   container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
   }
});