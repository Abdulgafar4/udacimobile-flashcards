import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import allstyles from '../utils/style'
import { blue } from '../utils/colors'

const About = () => {
  const [titleText, setTitleText] = useState("About This App");
  const bodyText = useState("This was a react native application that let you create decks. ");
  const [installText, setInstallText] = useState("How To Install This App");
  const installBody = useState("Git clone: https://github.com/Abdulgafar4/udacity-mobile-flashcards");

  return (
    <View style={{ flex: 1 }}>
    <Text style={styles.baseText}>
      <Text style={styles.titleText} >
        {titleText}
        {"\n"}
        {"\n"}
      </Text>
      <Text numberOfLines={10}>{bodyText}
       {"\n"}
        {"\n"}
      </Text>
      <Text>
        Within the decks you can create question cards and aslo answer to the question.
        {"\n"}
        {"\n"}
      </Text>
       <Text>
        This is the Third Udacity Project using React-Native expo.
        {"\n"}
        {"\n"}
      </Text>
       {"\n"}
        {"\n"}
    </Text>
  
     <Text style={styles.baseText}>
      <Text style={styles.titleText} >
        {installText}
        {"\n"}
        {"\n"}
      </Text>
      <Text numberOfLines={10}>{installBody}
       {"\n"}
        {"\n"}
      </Text>
      <Text style={allstyles.titleText}>After That Download The Dependency With: Yarn
       {"\n"}
        {"\n"}
      </Text>
      <Text>After That Start The Web App Using: expo start --web 
       {"\n"}
        {"\n"}
      </Text>
      <Text>After That Start The Android App Using: expo start --android
        {"\n"}
        {"\n"}
      </Text>
      <Text>After That Start The Ios App Using: expo start --ios
       {"\n"}
        {"\n"}
      </Text>

    </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin",
  
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: blue,
    justifyContent: "center",
  }
});

export default About;
