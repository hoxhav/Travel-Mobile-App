import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import DatePicker from 'react-native-datepicker'
import { Video } from 'expo';

//https://rest-hotels-api.herokuapp.com/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'magenta'
    },
    input: {
        width: 300,
        height: 50,
        backgroundColor: '#FFF',
        marginVertical: 15
    },
    minimalistic: {
        flex: 1,
        flexDirection: 'row'
    },
    minInput: {
        width: 100,
        height: 50,
        backgroundColor: '#FFF',
        marginVertical: 15
    },
    bottonReaction: {
        width: 300,
        height: 50,
        backgroundColor: '#dc143c',
        marginBottom: 200
    },
    fontish: {
        fontSize: 30,
        marginLeft: 100,
        color: 'white'
    },
    dates: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 10,
        color: 'white'
    }
});

export class Hotel extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            arrivalDate: "2019-05-05",
            departureDate: "2019-05-05",
            city: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Video source={{ uri: 'https://theirfo.com/wp-content/uploads/2019/05/purple.mp4' }} resizeMode="cover"
                    shouldPlay
                    isLooping
                    isMuted={true}
                    resizeMode="cover" style={StyleSheet.absoluteFill} />
                <TextInput placeholder="City" style={styles.input} onChangeText={(text) => this.setState({ city: text })} />
                <View style={styles.minimalistic}>
                    <TextInput placeholder="Adult" style={styles.minInput} />
                    <TextInput placeholder="Children" style={styles.minInput} />
                    <TextInput placeholder="Rooms" style={styles.minInput} />
                </View>
                <View style={styles.dates}>
                    <DatePicker
                        style={{ width: 180 }}
                        date={this.state.date}
                        mode="date"
                        placeholder="Arrival Date"
                        format="YYYY-MM-DD"
                        minDate="2019-05-06"
                        maxDate="2022-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        onDateChange={(date) => { this.setState({ arrivalDate: date }) }}
                    />

                    <DatePicker
                        style={{ width: 180 }}
                        date={this.state.date}
                        mode="date"
                        placeholder="Departure Date"
                        format="YYYY-MM-DD"
                        minDate="2019-05-06"
                        maxDate="2022-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        onDateChange={(date) => { this.setState({ departureDate: date }) }}
                    />

                </View>

                <TouchableOpacity onPress={() => this.props.navigate('HotelResult', { city: this.state.city})} style={styles.bottonReaction}><Text style={styles.fontish}>Search</Text></TouchableOpacity>
            </View>
        );
    }
}


