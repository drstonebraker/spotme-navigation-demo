import React from 'react'
import { View, Button } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import styles from '../styles/styles'

export default class SessionFormScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }


    this._handleChange = this._handleChange.bind(this)
  }

  _handleChange (fieldName) {
    return (e) => this.setState({[fieldName]: e.target.value})
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <FormLabel>Username</FormLabel>
        <FormInput onChangeText={this._handleChange('username')}/>
        <FormValidationMessage>Error message</FormValidationMessage>
        <FormLabel>Password</FormLabel>
        <FormInput onChangeText={this._handleChange('password')}/>
        <FormValidationMessage>Error message</FormValidationMessage>
        <Button
          onPress={() => {}}
          title='Submit' />
      </View>
    )
  }

}
