import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppLoading, Asset  } from "expo";

import AppNavigation from "./src/navigation";
import { Block } from "./src/components";

// import all used images
const images = [
    require('./assets/icons/back.png'),
    require('./assets/icons/plants.png'),
    require('./assets/icons/seeds.png'),
    require('./assets/icons/flowers.png'),
    require('./assets/icons/sprayers.png'),
    require('./assets/icons/pots.png'),
    require('./assets/icons/fertilizers.png'),
    require('./assets/images/plants_1.png'),
    require('./assets/images/plants_2.png'),
    require('./assets/images/plants_3.png'),
    require('./assets/images/explore_1.png'),
    require('./assets/images/explore_2.png'),
    require('./assets/images/explore_3.png'),
    require('./assets/images/explore_4.png'),
    require('./assets/images/explore_5.png'),
    require('./assets/images/explore_6.png'),
    require('./assets/images/illustration_1.png'),
    require('./assets/images/illustration_2.png'),
    require('./assets/images/illustration_3.png'),
    require('./assets/images/avatar.png'),
];

export default class App extends React.Component {
    state = {
        isLoadingComplete: false,
    }

    handleResourcesAsync = async () => {
        // cache all the images --> better performance on the app
        const cacheImages = images.map(image => {
            return Asset.fromModule(image).downloadAsync();
        })
        return Promise.all(cacheImages);
    }
    render() {
        const { isLoadingComplete } = this.state;
        if(!isLoadingComplete) {
            return (
                <AppLoading 
                    startAsync={this.handleResourcesAsync}
                    onError={error => console.warn('anhvt14 - error - Apploading', error)}
                    onFinish={() => this.setState({isLoadingComplete: true})}
                />
            );
        }
        return (
            <Block>
                <AppNavigation />
            </Block>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
