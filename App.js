import React from 'react';
import { StackNavigator } from 'react-navigation';

import SessionFormScreen from './src/screens/SessionForm'
import WelcomeScreen from './src/screens/Welcome'

const App = StackNavigator({
  Home: { screen: WelcomeScreen },
  SessionForm: { screen: SessionFormScreen },
})

export default App;
