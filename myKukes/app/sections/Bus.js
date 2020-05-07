import * as React from 'react';
import { Text, View} from 'react-native';

export class Bus extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{marginTop: 100}}>
                <Text style={{fontSize: 50, alignItems: 'center', justifyContent: 'center'}} >Coming Soon...</Text>
            </View>
        );
    }
}


