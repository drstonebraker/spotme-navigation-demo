import React from 'react'
import { View, Text } from 'react-native'

import styles from '../styles/styles'

export default class ChatScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}
