import React from 'react';
import { View } from 'react-native';
import { History } from '../sections/History.js';
import { MainHeader } from '../views/MainHeader.js';

export class HistoryInit extends React.Component {
    static navigationOptions = {
        header: null
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1 }}>
                <MainHeader title={'History'}/>
                <History navigate={navigate} />
            </View>
        );
    }
}