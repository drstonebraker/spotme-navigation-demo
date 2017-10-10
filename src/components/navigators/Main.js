import React from 'react'
import { StackNavigator } from 'react-navigation';

import SessionFormScreen from '../screens/SessionForm'
import HomeConditionalScreen from '../screens/HomeConditional'


const MainNavigator = StackNavigator({
  Home: { screen: HomeConditionalScreen },
  SessionForm: { screen: SessionFormScreen },
})

export default MainNavigator;
