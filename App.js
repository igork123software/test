import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import LoginScreen from "./components/screens/login/LoginScreen";
import SecondScreen from "./components/screens/second/SecondScreen";
import AuthScreen from "./components/screens/auth/AuthScreen";
import { Provider } from 'react-redux';
import store from './app/redux/store/store';

const RootStack = createStackNavigator(
  {
    AuthScreen: {
      screen: AuthScreen,
    },
    LoginScreen: {
      screen: LoginScreen,
    },
    SecondScreen: {
      screen: SecondScreen,
    }    
  },
  {
    initialRouteName: 'AuthScreen',
  }
);

const AppContainer = createAppContainer(RootStack);

export class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;