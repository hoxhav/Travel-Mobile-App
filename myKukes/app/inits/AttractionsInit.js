import React from 'react';
import { View } from 'react-native';
import { Attractions } from '../sections/Attractions.js';
import { MainHeader } from '../views/MainHeader.js';

export class AttractionsInit extends React.Component {
    static navigationOptions = {
        header: null
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1 }}>
                <MainHeader title={'Attractions'} />
                <Attractions navigate={navigate} />
            </View>
        );
    }
}