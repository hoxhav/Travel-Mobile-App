import React, { Component } from "react";
import { Text, View, ActivityIndicator, ToastAndroid, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

export class HotelResult extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            city: this.props.navigation.state.params.city,
            data: [],
            isLoading: true
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    renderItem = ({ item }) => {
        return (
            <ScrollView>
                <TouchableOpacity style={{ flex: 1, flexDirection: 'row', marginBottom: 3 }}
                    onPress={() => ToastAndroid.show('You booked ' + item.name, ToastAndroid.SHORT)}
                >
                    <Image style={{ width: 200, height: 120, margin: 5 }} source={{ uri: item.images[0] }} />
                    <View style={{ flex: 1, justifyContent: 'center', marginLeft: 5 }}>
                        <Text>
                            Name: {item.name}
                        </Text>
                        <Text>
                            Price: {item.price}
                        </Text>
                        <Text>
                            Stars: {item.stars}
                        </Text>
                        <Text>
                            Address: {item.address}
                        </Text>
                        <Text>
                            Email: {item.email}
                        </Text>
                        <Text>
                            Phone: {item.phone}
                        </Text>
                        <Text>
                            Website: {item.website}
                        </Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        )
    }

    renderSeparator = () => {
        return (
            <View
                style={{ height: 1, width: '100%', backgroundColor: 'black' }}
            >

            </View>
        )
    }


    fetchData = async () => {
        const response = await fetch('https://rest-hotels-api.herokuapp.com/v1/hotels?city=' + this.state.city);
        const json = await response.json();
        this.setState({ data: json, isLoading: false });
    };

    render() {
        return (
            this.state.isLoading
                ?
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#330066" animating />
                </View>
                :
                <View style={styles.container}>
                    <FlatList
                        data={this.state.data}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={this.renderSeparator}
                    />
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5FCFF"
    }
});