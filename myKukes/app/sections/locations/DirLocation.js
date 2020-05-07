import React, { Component } from 'react';
import { Dimensions, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0822;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = 'AIzaSyAnwRek3V5mTZ_RI-mbyq47IW3FnPO-9ro';

export class DirLocation extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            locationJson: this.props.navigation.state.params.locationJson
        };
    }

    render() {
        let loc = this.state.locationJson;
        const coordinates = [
            {
                latitude: 45.8145,
                longitude: 15.9798,
            },
            {
                latitude: 45.782510,
                longitude: 15.981118,
                //    latitude: loc[0].coords.latitude,
                //  longitude: loc[0].coords.longitude,
            },
        ];
        return (
            <MapView style={StyleSheet.absoluteFill}
                initialRegion={{
                    latitude: coordinates[0].latitude,
                    longitude: coordinates[0].longitude,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                }} >
                <MapView.Marker coordinate={coordinates[0]} />
                <MapView.Marker coordinate={coordinates[1]} />
                <MapViewDirections
                    origin={coordinates[0]}
                    destination={coordinates[1]}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor="hotpink"
                />
            </MapView>
        );
    }
}