import React, { Component } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons';
import { CircularProgress } from 'react-native-circular-progress';

import { Text, Block, Card } from '../../components';
import { theme, strings } from '../../constants';

class Dashboard extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: (
                <Block center middle>
                    <Text style={theme.fonts.header }>
                        FMS
                    </Text>
                </Block>
            ),
            headerLeft: null,
            headerRight: <TouchableOpacity onPress={() => navigation.navigate(strings.appScreens.Listing)}>
                <Text>Next</Text>
            </TouchableOpacity>
        }
    }

    constructor(props) {
        super(props);
        this.state = {  };
    }

    renderChart(value, percent, maxWorkingHour, color, type) {
        return(
            <Card shadow style={{ paddingVertical: theme.sizes.base * 2 }}>
                <Block center>
                    <CircularProgress
                        size={214} // can use  with * .5 => 50%
                        fill={percent} // percentage
                        lineCap="round" // line ending style 'butt' | 'square' | 'round';
                        rotation={220}
                        arcSweepAngle={360}
                        width={theme.sizes.base}
                        tintColor={color} // gradient is not supported :(
                        backgroundColor={theme.colors.gray2}
                        backgroundWidth={theme.sizes.base / 2}
                    >
                        {() => (
                        <Block center middle>
                            <Text h1 medium size={42}>{ value }</Text>
                            <Text h3 transform="uppercase">{ type.title }</Text>
                        </Block>
                        )}
                    </CircularProgress>
                </Block>
                <Block center>
                    <Text title spacing={1} style={{ marginVertical: 8 }}>
                        { type.label }
                    </Text>
                    <Text>
                        <Text primary> {maxWorkingHour } </Text>
                        <Text gray transform="uppercase">hours</Text>
                    </Text>
                </Block>
            </Card>
        );
    }

    renderTitle() {
        return(
            <Block flex={false} style={styles.title}>
                <Text style={styles.headerText}>Personal Fatigue Status</Text>
            </Block>
        );
    }

    render() {
        return (
            <React.Fragment>
                <ScrollView style={styles.container} style={styles.container} showsVerticalScrollIndicator={false}>
                    
                    {this.renderTitle()}
                    {this.renderChart(12, 85, 15, theme.colors.accent, {title: 'Hours', label: 'Max Working Hours'})}
                    {this.renderChart(8, 55, 15, theme.colors.primary, {title: 'Days', label: 'Max Working Days'})}
                    {this.renderChart(9, 70, 13, theme.colors.secondary, {title: 'Rest Hours', label: 'Min Rest Hours'})}
                </ScrollView>
            </React.Fragment>
        );
    }
}
export default Dashboard;

const styles = StyleSheet.create({
    container: {
        paddingVertical: theme.sizes.padding / 2,
        padding: theme.sizes.padding,
        backgroundColor: theme.colors.gray4,
    },
    header: {
        fontSize: 36,
    },
    title: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: 10
    },
    headerText: {
        color: theme.colors.black,
        fontSize: theme.sizes.h3,
        fontWeight: 'bold'
    },
    text: {

    }
});