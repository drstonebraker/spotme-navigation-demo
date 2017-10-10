import React from 'react'

import HomeScreen from './Home'
import WelcomeScreen from './Welcome'


export default class HomeConditionalScreen extends React.Component {

  constructor(props) {
    super(props)

  }

  static navigationOptions = {
    title: false ? 'Home' : 'Welcome',
    // title: this.props.isLoggedIn ? 'Home' : 'Welcome',
  };

  render() {
    const { isLoggedIn, navigation } = this.props
    return (

      isLoggedIn ? (
        <HomeScreen navigation={navigation} />
      ) : (
        <WelcomeScreen navigation={navigation} />
      )
    )
  }

}
