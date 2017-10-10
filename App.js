import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './src/screens/Home'
import SessionFormScreen from './src/screens/SessionForm'

export const MainNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  SessionForm: { screen: SessionFormScreen },
})

export default class App extends React.Component {
  render() {
    return (
      <MainNavigator />
    )
  }
}
