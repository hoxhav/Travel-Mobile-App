import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 20,
  },
  headStyle: {
    paddingTop: 30,
    paddingBottom: 10,
    paddingRight: 10,
    borderColor: '#ffffff',
    borderBottomWidth: 1,
    backgroundColor: '#31a981',
  },
});

export class MainHeader extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.headStyle}>
        <Text style={styles.headText}>{this.props.title}</Text>
      </View>
    );
  }
}
