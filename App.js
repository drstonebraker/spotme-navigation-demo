import React from 'react';
import { ApolloProvider } from 'react-apollo';

import MainNavigator from './src/components/navigators/Main'
import store, { client } from './src/redux/store/store';

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider store={store} client={client}>
        <MainNavigator />
      </ApolloProvider>
    )
  }
}
