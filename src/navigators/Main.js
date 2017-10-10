import React from 'react'
import { StackNavigator } from 'react-navigation';

import SessionFormScreen from '../screens/SessionForm'
import HomeScreen from '../screens/Home'


const MainNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  SessionForm: { screen: SessionFormScreen },
})

export default MainNavigator;
