import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, ScrollView } from "react-native";
import { Video, Constants, Location, Permissions } from 'expo';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#e5e5e5"
    }
});

export class Attractions extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            locationJson: []
        };
    }


    componentWillMount() {
        this._getLocationAsync();
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({ location });
    };

    render() {
        let text = JSON.stringify(this.state.location);
        return (
            <View style={styles.container}>
                <ScrollView>
                    <TouchableOpacity
                        onPress={() => this.props.navigate('Castle', { locationJson: text })}>

                        <Image
                            style={{ width: "100%", height: 200, resizeMode: "cover" }}
                            source={require("../../assets/images/attractions/castle.jpg")}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigate('Sea', { locationJson: text })}>
                        <Image
                            style={{ width: "100%", height: 200, resizeMode: "cover" }}
                            source={require("../../assets/images/attractions/sea.jpg")}
                        />
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => this.props.navigate('Mosque2', { locationJson: text })}>
                        <Image
                            style={{ width: "100%", height: 200, resizeMode: "cover" }}
                            source={require("../../assets/images/attractions/mosque2.jpg")}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigate('Mosque1', { locationJson: text })}>
                        <Image
                            style={{ width: "100%", height: 200, resizeMode: "cover" }}
                            source={require("../../assets/images/attractions/mosque1.jpg")}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigate('Mountain', { locationJson: text })}>
                        <Image
                            style={{ width: "100%", height: 200, resizeMode: "cover" }}
                            source={require("../../assets/images/attractions/mountain.jpg")}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigate('Thethi', { locationJson: text })}>
                        <Image
                            style={{ width: "100%", height: 200, resizeMode: "cover" }}
                            source={require("../../assets/images/attractions/thethi.jpg")}
                        />
                    </TouchableOpacity>

                </ScrollView>
            </View>
        );
    }
}