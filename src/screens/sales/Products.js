import React, { Component } from 'react';
import { StyleSheet, Platform, FlatList } from 'react-native';
import { theme } from '../../constants';
import { Block, Text } from '../../components';

class Products extends Component {

    static navigationOptions = {
        title: 'Lựa chọn hàng hoá',
        headerStyle: {
            backgroudColor: theme.colors.primary
        },
        headerTintColor: theme.colors.white,
        headerTitleStyle: {
            fontWeight: theme.fonts.title
        }
    }

    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Block flex={false} >
                {/* search and scan box */}
                <Block style={styles.header}>
                    <Text>AAAAA</Text>
                </Block>
                {/* listing */}
                {/* <FlatList /> */}
            </Block>
        );
    }
}
export default Products;

const styles = StyleSheet.create({
    header: {
        height: theme.dimensions.heightHeader,
        width: '100%',
        paddingHorizontal: theme.sizes.padding,
        backgroundColor: 'red'
    }
});