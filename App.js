import AppNavigator from './navigation/AppNavigator';
import React, { Component } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default class App extends Component {
  state = {
    isReady: false,
  };

  render() {
    if (!this.state.isReady) {
      // continue showing splash screen until all the resources have been loaded
      return (
        <AppLoading
          startAsync={this.loadResources}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <AppNavigator/>
    );
  }

  async loadResources() {
   return Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
  }
}
