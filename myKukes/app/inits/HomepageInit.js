import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Homepage } from '../sections/Homepage.js';
import { MainHeader } from '../views/MainHeader.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export class HomepageInit extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <MainHeader title={'myKukës'} />
        <Homepage navigate={navigate} />
      </View>
    );
  }
}
