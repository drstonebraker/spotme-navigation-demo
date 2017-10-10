import React from 'react'
import { View, Text, Button } from 'react-native'

import styles from '../styles/styles'

export default class RecentChatsScreen extends React.Component {
  render() {
    return (
      <View style={styles.screen}>
        <Text>List of recent chats</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
          title="Chat with Lucy"
        />
      </View>
    )
  }
}
