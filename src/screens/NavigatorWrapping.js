import React from 'react'
import { View, Text, Button } from 'react-native'

import styles from '../styles/styles'
import MainScreenNavigator from '../navigators/MainScreen'

class NavigatorWrappingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>YOLO</Text>
        <MainScreenNavigator navigation={this.props.navigation}/>
      </View>
    );
  }
}

NavigatorWrappingScreen.router = MainScreenNavigator.router;


export default NavigatorWrappingScreen;
