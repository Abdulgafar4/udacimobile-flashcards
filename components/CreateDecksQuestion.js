import React, { Component } from 'react'
import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, TextInput, StyleSheet, Platform } from 'react-native'
import { connect } from 'react-redux'
import { createCard } from '../actions'
import * as ApiDATA from '../utils/api'
import SubmitButton from './SubmitButton'
import allstyles from '../utils/style'
import { red, blue, gray } from '../utils/colors'
import { FontAwesome } from '@expo/vector-icons';


class CreateDecksQuestion extends Component {
  state = {
    quiz: "",
    answer: "",
    quizError: false,
  };
  createNewQuestion = () => {
    const { quiz, answer } = this.state
    const { createCard, navigation, title } = this.props   
    if ( quiz && answer ) {
      ApiDATA.addCardToDeck(title, {quiz, answer}) .then(() => {
        createCard({title, card : {quiz, answer} });
        this.setState({
          answer: "",
          quiz: "",
        });
        navigation.goBack(); 
      })
    } else {
      this.setState ({
        quizError: quiz || answer ? false : true
      })
    }
  };

  render() {
       return (
      <KeyboardAvoidingView style={allstyles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <TouchableWithoutFeedback>
          <View style={allstyles.NQdeckCard}>
            <Text style={allstyles.title}>Add a Question</Text>
            <TextInput
              style={[ allstyles.textinput, this.state.quizError ? { borderColor: red } : "" ]}
              placeholder="Your Question..."
              value={this.state.title}
              onSubmitEditing={() => this.answerTextInput.focus()} //eslint-disable-line
              onChangeText={(text) =>
                this.setState({ quiz: text })}
              returnKeyType="next"
            />
            <TextInput
              ref="AnswerInput"
              style={[
                allstyles.textinput, this.state.quizError ? { borderColor: red } : ""
              ]}
              placeholder="Your Answer."
              value={this.state.title}
              onChangeText={(text) =>
                this.setState({ answer: text })}
              onSubmitEditing={this.createNewQuestion}
              returnKeyType="done"
            />
            <SubmitButton
              style={[allstyles.button, allstyles.submitButton,
               
            ]}
              onPress={this.createNewQuestion}
            >
              Submit
            </SubmitButton>

            <Text style={styles.notice}>
             <FontAwesome name="info-circle" size={14} color={gray} /> The Answer Input Must Contain correct or wrong.
           </Text>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
       )
  }


}

const styles = StyleSheet.create({
  notice: {
    textAlign: "center",
    padding: 10,
    fontSize: 14,
    color: blue
  }
});

function mapStateToProps (state, {navigation} ) {
  const { deckTitle} = navigation.state.params;

  return {
    deck: state[deckTitle],
    title: deckTitle
  };

}
function mapDispatchToProps(dispatch) {
  return {
    createCard: data => dispatch(createCard(data))
  }
}


export default connect(mapStateToProps, mapDispatchToProps ) (CreateDecksQuestion)
