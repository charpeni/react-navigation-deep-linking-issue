import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createTabNavigator, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';

const screenGenerator = screen => () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>{screen}</Text>
  </View>
);

const StackNavigator = createStackNavigator({
  Potato: {
    screen: screenGenerator('Screen 1'),
  },
  PotatoDetails: {
    screen: screenGenerator('Screen 2'),
    path: 'potato/:id',
  },
});

const tabs = {
  ScreenA: screenGenerator('Screen A'),
  Potato: StackNavigator,
};

const TabNavigator = createMaterialTopTabNavigator(tabs, {
  paths: Object.keys(tabs).reduce((paths, path) => ({ ...paths, [path]: null }), {}),
});

export default class App extends Component {
  render() {
    return <TabNavigator uriPrefix='test://' />;
  }
}
