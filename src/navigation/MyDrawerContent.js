import React from 'react';
import { Image } from 'react-native';
import { DrawerItems, SafeAreaView, ScrollView } from 'react-navigation';
import { Block, Text } from '../components';
import { commonStyles, images, theme, strings } from '../constants'

const MyDrawerContent = (props) => (
    <ScrollView>
        <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always', horizontal: 'never' }}>
            <Block>
                <Block flex={false} color='primary' height={100}
                    style={{justifyContent: 'center', alignItems: 'flex-start', paddingLeft: theme.sizes.base }}
                >
                    <Image
                        source={images.avatar}
                        style={commonStyles.avatar}
                    />
                    <Text white h3 >
                        {strings.appMessages.EMAIL_PLACEHOLDER}
                    </Text>
                    <Text white h4>
                        {strings.appMessages.STORE_NAME}
                    </Text>
                </Block>
                <DrawerItems 
                    {...props}
                    inactiveTintColor={theme.colors.black}
                />
            </Block>
        </SafeAreaView>
    </ScrollView>
);

export default MyDrawerContent;