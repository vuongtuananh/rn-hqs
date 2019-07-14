import React, { Component } from 'react';
import { StyleSheet, Alert, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Text, Block, Button, Card, Badge } from '../../components';
import { theme, mocks } from "../../constants";

const tabs = ['Deviation Request', 'My Deviation Status'];
const {width, height} = Dimensions.get('screen')

class Listing extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            activeTab: tabs[0],
            deviations: []
         };
    }

    componentDidMount() {
        this.setState({ deviations: this.props.deviations });
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
        const { deviations } = this.state;
        return (
            <Block>

            {/* tabs */}
                <Block flex={false} row style={styles.tabs}>
                    {tabs.map(tab => this.renderTab(tab))}
                </Block>

            {/* scrollview */}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{paddingHorizontal: theme.sizes.base * 2}}
                >
                    <Block row space='between' style={styles.deviations}>
                        {
                            deviations.map(deviation => (
                                <Card shadow style={styles.category} key={deviation.id}>
                                    <Block style={styles.infoContainer}>
                                        <Badge margin={[0, 0, 5]} size={60} color="rgba(41,216,143,0.20)">
                                            <Image source={deviation.image} />
                                        </Badge>
                                        <Block style={styles.info}>
                                            <Block style={styles.infoLine}>
                                                <Text medium height={16}>Name:</Text>
                                                <Text black caption>{deviation.name}</Text>
                                            </Block>
                                            <Block style={styles.infoLine}>
                                                <Text medium height={16}>Deviation No:</Text>
                                                <Text black caption>{deviation.deviationNo}</Text>
                                            </Block>
                                            <Block style={styles.infoLine}>
                                                <Text medium height={16}>Date:</Text>
                                                <Text black caption>{deviation.date}</Text>
                                            </Block>
                                            <TouchableOpacity style={[styles.infoLine, {justifyContent: 'center', alignItems: 'flex-start'}]}
                                                onPress={() => Alert.alert('Alert', 'View More') }
                                            >
                                                <Text style={styles.textMore}>View More</Text>
                                            </TouchableOpacity>
                                        </Block>
                                    </Block>
                                    <Block style={styles.buttonContainer}>
                                        <Button
                                            color={theme.colors.secondary}
                                            style={styles.button}
                                            onPress={() => Alert.alert('Alert', 'Accept')}
                                        >
                                            <Text style={styles.buttonText}>Accept</Text>
                                        </Button>
                                        <Button
                                            color={theme.colors.accent}
                                            style={styles.button}
                                            onPress={() => Alert.alert('Alert', 'Reject')}
                                        >
                                            <Text style={styles.buttonText}>Reject</Text>
                                        </Button>
                                        <Button
                                            color={theme.colors.gray4}
                                            style={styles.button}
                                            onPress={() => Alert.alert('Alert', 'Revert')}
                                        >
                                            <Text style={[styles.buttonText, {color: theme.colors.black}]}>Revert</Text>
                                        </Button>
                                    </Block>
                                </Card>
                            ))
                        }
                    </Block>

                </ScrollView>
            </Block>
        );
    }
}

Listing.defaultProps = {
    deviations: mocks.deviations
}
export default Listing;

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
    deviations: {
        // flexWrap: 'wrap',
        marginBottom: theme.sizes.base,
        marginTop: theme.sizes.base,
        flexDirection: 'column'
    },
    category: {
        minWidth: (width - (theme.sizes.padding * 2.4) - theme.sizes.base),
        maxWidth: (width - (theme.sizes.padding * 2.4) - theme.sizes.base),
        maxHeight: (width - (theme.sizes.padding * 2.4) - theme.sizes.base),
        marginLeft: theme.sizes.base / 2,
        height: 160,
        padding: 5,
        // borderWidth: 1,
        // borderColor: theme.colors.gray,
        // borderRadius: 0
    },
    infoContainer: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    info: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    infoLine: {
        // flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingBottom: 5,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        height: theme.sizes.base * 2,
        width: theme.sizes.base * 5,
        // borderRadius: 0,
        borderWidth: 1,
        borderColor: theme.colors.gray,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: theme.colors.white,
        fontSize: theme.sizes.body,
        fontWeight: '700'
    },
    textMore: {
        color: 'blue',
        textDecorationLine: 'underline'
    },
});