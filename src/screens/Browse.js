import React, { Component } from 'react';
import { StyleSheet, Platform, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Text, Block, Button, Card, Badge } from '../components';
import { theme, mocks } from "../constants";

const tabs = ['Products', 'Inspirations', 'Shop'];
const { width, height } = Dimensions.get('window');

class Browse extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            activeTab: tabs[0],
            categories: []
         };
    }

    componentDidMount() {
        this.setState({ categories: this.props.categories });
    }


    handleTab = (tab) => {
        this.setState({
            activeTab: tab
        })
    }
    renderTab(tab) {
        const { activeTab } = this.state;
        const isActive = activeTab === tab;
        return (
            <TouchableOpacity
                key={`tab-${tab}`}
                onPress={() => this.handleTab(tab)}
                style={[styles.tab, isActive ? styles.active : null]}
            >
                <Text medium gray={!isActive} primary={isActive}>{tab}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        const { navigation } = this.props;
        const { categories } = this.state;
        return (
            <Block>
            {/* header */}
                <Block flex={false} row center space='between' style={styles.header} >
                    <Text h1 bold>Browse</Text>
                    <Button onPress={() => navigation.navigate('Settings')}>
                        <Image
                            source={require('../../assets/images/avatar.png')}
                            style={styles.avatar}
                        />
                    </Button>
                </Block>

            {/* tabs */}
            <Block flex={false} row style={styles.tabs}>
                {tabs.map(tab => this.renderTab(tab))}
            </Block>

            {/* scrollview */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{paddingHorizontal: theme.sizes.base * 2}}
            >
                <Block row space='between' style={styles.categories}>
                    {
                        categories.map(category => (
                            <TouchableOpacity
                                key={category.id}
                                onPress={() => console.log('anhvt14 - go to category')}
                            >
                                <Card center middle shadow style={styles.category}>
                                    <Badge margin={[0, 0, 15]} size={50} color="rgba(41,216,143,0.20)">
                                        <Image source={category.image} />
                                    </Badge>
                                    <Text medium height={20}>{category.name}</Text>
                                    <Text gray caption>{category.count} products</Text>
                                    </Card>
                            </TouchableOpacity>
                        ))
                    }
                </Block>

            </ScrollView>
            </Block>
        );
    }
}

Browse.defaultProps = {
    categories: mocks.categories
}
export default Browse;

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: theme.sizes.base * 2,
    },
    avatar: {
        height: theme.sizes.base * 2.2,
        width: theme.sizes.base * 2.2,
    },
    tabs: {
        marginVertical: theme.sizes.base,
        marginHorizontal: theme.sizes.base * 2,
        borderBottomColor: theme.colors.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    tab: {
        paddingBottom: 20,
        marginRight: theme.sizes.base * 2,
    },
    active: {
        borderBottomColor: theme.colors.primary,
        borderBottomWidth: 3,
    },
    categories: {
        flexWrap: 'wrap',
        marginBottom: theme.sizes.base * 3.5,
        marginTop: theme.sizes.base,
    },
    category: {
        minWidth: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
        maxWidth: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
        maxHeight: (width - (theme.sizes.padding * 2.4) - theme.sizes.base) / 2,
    },
});