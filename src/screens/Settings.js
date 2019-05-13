import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
   }
   render() {
       return (
           <View style={styles.container}>
               <Text>Settings</Text>
           </View>
       );
   }
}
export default Settings;

const styles = StyleSheet.create({
   container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
   }
});