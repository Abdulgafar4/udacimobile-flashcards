import React from "react";
import { View, StatusBar } from "react-native";
import { blue } from "./utils/colors";
import reducer from "./reducers";
import Constants from 'expo-constants';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { setLocalNotification } from "./utils/helpers";
import  MainNav  from "./components/Navigators";

function FlashCardStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <FlashCardStatusBar
            backgroundColor={blue}
            barStyle="light-content"
          />
          <MainNav />
        </View>
      </Provider>
    );
  }
}