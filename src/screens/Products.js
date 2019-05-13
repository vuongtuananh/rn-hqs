import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
   }
   render() {
       return (
           <View style={styles.container}>
               <Text>Products</Text>
           </View>
       );
   }
}
export default Products;

const styles = StyleSheet.create({
   container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
   }
});