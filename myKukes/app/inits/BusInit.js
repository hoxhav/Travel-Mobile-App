import React from 'react';
import { View } from 'react-native';
import { Bus } from '../sections/Bus.js';
import { MainHeader } from '../views/MainHeader.js';

export class BusInit extends React.Component {
    static navigationOptions = {
        header: null
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1 }}>
                <MainHeader title={'Book Bus'} />
                <Bus navigate={navigate} />
            </View>
        );
    }
}