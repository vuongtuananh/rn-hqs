import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';

class Browse extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
   }
   render() {
       return (
           <View style={styles.container}>
               <Text>Browse</Text>
           </View>
       );
   }
}
export default Browse;

const styles = StyleSheet.create({
   container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
   }
});