import React from 'react';
import { View } from 'react-native';
import { Hotel } from '../sections/Hotel.js';
import { MainHeader } from '../views/MainHeader.js';

export class HotelInit extends React.Component {
    static navigationOptions = {
        header: null
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1 }}>
                <MainHeader title={'Book Hotel'} />
                <Hotel navigate={navigate} />
            </View>
        );
    }
}