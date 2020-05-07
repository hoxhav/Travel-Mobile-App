import * as React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, ScrollView } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#e5e5e5"
    }
});

export class History extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <TouchableOpacity
                        onPress={() => this.props.navigate('Ottoman')}>

                        <Image
                            style={{ width: "100%", height: 200, resizeMode: "cover" }}
                            source={require("../../assets/images/history/ottoman.jpg")}
                        />
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        onPress={() => this.props.navigate('Ww1')}>
                        <Image
                            style={{ width: "100%", height: 200, resizeMode: "cover" }}
                            source={require("../../assets/images/history/ww1.jpg")}
                        />
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => this.props.navigate('Ww2')}>
                        <Image
                            style={{ width: "100%", height: 200, resizeMode: "cover" }}
                            source={require("../../assets/images/history/ww2.jpg")}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigate('Communist')}>
                        <Image
                            style={{ width: "100%", height: 200, resizeMode: "cover" }}
                            source={require("../../assets/images/history/communist.jpg")}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigate('Kosovo')}>
                        <Image
                            style={{ width: "100%", height: 200, resizeMode: "cover" }}
                            source={require("../../assets/images/history/kosovo.jpg")}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigate('Architecture')}>
                        <Image
                            style={{ width: "100%", height: 200, resizeMode: "cover" }}
                            source={require("../../assets/images/history/testPic.jpg")}
                        />
                    </TouchableOpacity>

                </ScrollView>
            </View>
        );
    }
}