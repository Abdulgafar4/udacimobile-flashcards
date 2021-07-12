import React, { Component } from 'react'
import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { createCard } from '../actions'
import * as ApiDATA from '../utils/api'
import SubmitButton from './SubmitButton'
import allstyles from '../utils/style'
import { red } from '../utils/colors'

class CreateDecksQuestion extends Component {
  state = {
    isQuestion: "",
    isAnswer: "",
    isError: false,
    qError: false
  };
  createNewQuestion = () => {
    const { isQuestion, isAnswer } = this.state
    const { createCard, navigation, title } = this.props   
    if ( isQuestion && isAnswer ) {
      ApiDATA.addCardToDeck(title, {isQuestion, isAnswer}) .then(() => {
        createCard({title, card : {isQuestion, isAnswer} });
        this.setState({
          isAnswer: "",
          isQuestion: "",
          isError: false,
          qError : false
        });
        navigation.goBack(); 
      })
    } else {
      console.log(this.state.isError)
    }
  };

  render() {
       const { isError, qError } = this.state
       return (
      <KeyboardAvoidingView style={allstyles.container} behavior="padding">
        <TouchableWithoutFeedback>
          <View style={allstyles.NQdeckCard}>
            <Text style={allstyles.title}>Add a Question</Text>
            <TextInput
              style={[
                allstyles.textinput,
                qError ? { borderColor: red } : ""
              ]}
              placeholder="Your Question..."
              value={this.state.title}
              onSubmitEditing={() => this.refs.AnswerInput.focus()} //eslint-disable-line
              onChangeText={(text) =>
                this.setState({ isQuestion: text, qError: false })}
              returnKeyType="next"
            />
            <TextInput
              refs="AnswerInput"
              style={[
                allstyles.textinput,
                isError ? { borderColor: red } : ""
              ]}
              placeholder="The Answer..."
              value={this.state.title}
              onChangeText={(text) =>
                this.setState({ isAnswer: text, isError: false })}
              onSubmitEditing={this.createNewQuestion}
              returnKeyType="done"
            />
            <SubmitButton
              style={[allstyles.button, allstyles.submitButton]}
              onPress={this.createNewQuestion}
            >
              Submit
            </SubmitButton>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
       )
  }


}

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