import * as React from 'react';
import { Text, Dimensions, View, StyleSheet, Image, TouchableOpacity, } from 'react-native';
import { Video } from 'expo';

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f5fffa',
  },
  imageRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 140,
  },
  imageSize: {
    width: 100,
    height: 100,
  },
  categoryGroup: {
    alignItems: 'center',
  },
  fontText: {
    fontFamily: 'Roboto',
    fontSize: 20,
    color: 'white'
  },
});

export class Homepage extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.layout}>
        <Video source={{ uri: 'https://theirfo.com/wp-content/uploads/2019/05/albTrimmed.mp4' }} resizeMode="cover"
          shouldPlay
          isLooping
          isMuted={true}
          resizeMode="cover" style={StyleSheet.absoluteFill} />

        <View style={styles.imageRow}>
          <TouchableOpacity
            style={styles.categoryGroup}
            onPress={() => this.props.navigate('History')}>
            <Image
              style={styles.imageSize}
              source={require('../../assets/images/history.png')}
            />
            <Text style={styles.fontText}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.categoryGroup}
            onPress={() => this.props.navigate('Attractions')}>
            <Image
              style={styles.imageSize}
              source={require('../../assets/images/attraction.png')}
            />
            <Text style={styles.fontText}>Attractions</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.imageRow}>
          <TouchableOpacity
            style={styles.categoryGroup}
            onPress={() => this.props.navigate('Bus')}>
            <Image
              style={styles.imageSize}
              source={require('../../assets/images/bus.png')}
            />
            <Text style={styles.fontText}>Book Bus</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.categoryGroup}
            onPress={() => this.props.navigate('Hotel')}>
            <Image
              style={styles.imageSize}
              source={require('../../assets/images/hotel.png')}
            />
            <Text style={styles.fontText}>Book Hotel</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
