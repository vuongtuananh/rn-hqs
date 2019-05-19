import React, { Component } from 'react';
import { StyleSheet, Platform, Image } from 'react-native';
import { Text, Block } from '../components';
import { theme } from "../constants";

class Browse extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    renderHeader() {
        return(
            <Block height={80} color='accent' >
                <Block  padding={[0, theme.sizes.base * 2]} style={styles.header} >
                    <Text h1 bold>
                        Browse
                    </Text>
                    <Image style={styles.avatar}
                        source={require('../../assets/images/avatar.png')}
                    />
                </Block>
            </Block>
        );
    }
    render() {
        return (
            <Block>
                {this.renderHeader()}
                <Block></Block>
            </Block>
        );
    }
}
export default Browse;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    }
});