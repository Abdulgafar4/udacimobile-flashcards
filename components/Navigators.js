import React from 'react';
import { blue, white } from '../utils/colors';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import DeckCards from './DeckCards';
import CreateDecks from './CreateDecks';
import Decks from './Decks';
import CreateDecksQuestion from './CreateDecksQuestion';
import ViewQuestion from './ViewQuestion';
import About from './About'
import { FontAwesome5 } from '@expo/vector-icons';

export const Tab = createBottomTabNavigator(
  {
    Decks: {
      screen: Decks,
      navigationOptions: {
        tabBarLabel: 'Decks',
        tabBarIcon: ({ color }) => (
          <FontAwesome name="home" size={24} color={color} />
        ),
      },
    },
    CreateDecks: {
      screen: CreateDecks,
      navigationOptions: {
        tabBarLabel: 'Create Decks',
        tabBarIcon: ({ color }) => (
          <Ionicons name="create-outline" size={24} color="black" />
        ),
      },
    },
    About: {
      screen: About,
      navigationOptions: {
        tabBarLabel: 'About',
        tabBarIcon: ({ color  }) => (
          <FontAwesome5 name="readme" size={24} color="black" />
        )
      }
    }
  },
  {
    navigationOptions: {
      header: null,
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? blue : white,
      inactiveTintColor: white,
      style: {
        height: 50,
        backgroundColor: Platform.OS === 'ios' ? white : blue,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
      },
    },
  }
);

const NavigationStack = createStackNavigator({
  Home: {
    screen: Tab,
  },
  DeckCards: {
    screen: DeckCards,
    navigationOptions: {
      headerColor: white,
      headerStyle: {
        backgroundColor: blue,
      },
    },
  },
  CreateDecksQuestion: {
    screen: CreateDecksQuestion,
    navigationOptions: {
      headerColor: white,
      headerStyle: {
        backgroundColor: blue,
      },
    },
  },
  ViewQuestion: {
    screen: ViewQuestion,
    navigationOptions: {
      headerColor: white,
      headerStyle: {
        backgroundColor: blue,
      },
    },
  },
});

const MainNav = createAppContainer(NavigationStack);

export default createAppContainer(MainNav);
