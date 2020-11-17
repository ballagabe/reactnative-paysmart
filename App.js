import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransactionComponent from './components/TransactionComponent';
import SettingsComponent from './components/SettingsComponent';
import TaxCalcComponent from './components/TaxCalcComponent';
import HelpComponent from './components/HelpComponent';
import { Icon } from 'react-native-elements'

const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#636363',
          }}
        >
          <Tab.Screen
            name="Home"
            component={TransactionComponent}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: () => (
                <Icon
                  name={'home'}
                  type='material'
                  color='#636363'
                />
              )
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsComponent}
            options={{
              tabBarLabel: 'Settings',
              tabBarIcon: () => (
                <Icon
                  name={'settings'}
                  type='material'
                  color='#636363'
                />
              )
            }}
          />
          <Tab.Screen
            name="Taxcalculator"
            component={TaxCalcComponent}
            options={{
              tabBarLabel: 'Tax',
              tabBarIcon: () => (
                <Icon
                  name={'calculate'}
                  type='material'
                  color='#636363'
                />
              )
            }}
          />
          <Tab.Screen
            name="Help"
            component={HelpComponent}
            options={{
              tabBarLabel: 'Help',
              tabBarIcon: () => (
                <Icon
                  name={'help'}
                  type='material'
                  color='#636363'
                />
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
