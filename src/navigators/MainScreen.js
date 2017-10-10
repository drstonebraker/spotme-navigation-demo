import React from 'react'
import { TabNavigator } from 'react-navigation'

import RecentChatsScreen from '../screens/RecentChats'
import AllContactsScreen from '../screens/AllContacts'


const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});

export default MainScreenNavigator;
