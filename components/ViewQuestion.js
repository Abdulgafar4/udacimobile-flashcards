import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import allstyles from '../utils/style';
import { gray, white, blue } from '../utils/colors';
import SubmitButton from './SubmitButton';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from "react-redux";

class ViewQuestion extends Component {
static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.state.params.deckTitle} Quiz`,
    };
  };

 state ={
   answer: [],
   cards: 0
 }

   nextQuestion = answers => {
     this.setState (prevState => {
    return {
      cards: prevState.cards + 1,
      answers: prevState.answer.push(answers),
    };
     })
  };

   restart = () => {
   this.setState({
      cards: 0,
      answer: []
    });
  };

  totalAnswer = () => {
    const sum = this.state.answer.reduce((x, y) => x + y);
    return sum;
  };

  _onPressButton() {
    alert(card.answer)
  }
  render() {

  const { deck, navigation } = this.props;
  const card = deck.questions[this.state.cards] || 'complete';

  if (card === 'complete') {
    return (
      <View style={allstyles.VQdeckCard}>
        <View style={allstyles.VQcontainer}>
          <Text style={allstyles.VQcomplete}>Quiz Complete!</Text>
          <View style={allstyles.VQresultsContainer}>
            <Text style={allstyles.VQresultsTitle}>
              {this.totalAnswer()} out of {deck.questions.length}
            </Text>
            <Text style={[allstyles.VQresultsTitle, { color: gray }]}>
              Accuracy{' '}
              {((this.totalAnswer() / deck.questions.length) * 100).toFixed(0)}%
            </Text>
          </View>
        </View>
        <View style={allstyles.VQanswerButtonsContainer}>
          <SubmitButton
            style={[allstyles.button, allstyles.VQcorrectButton]}
            onPress={this.restart}>
            Try Again
          </SubmitButton>
          <SubmitButton
            style={[allstyles.button, allstyles.VQcorrectButton]}
            onPress={() => navigation.goBack()}>
            Complete
          </SubmitButton>
        </View>
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={allstyles.VQdeckCard}>
        <View style={allstyles.VQcontainer}>
          <Text style={allstyles.VQlabel}>{'Question:'}</Text>
          <Text style={allstyles.VQquiz}>
          { card.quiz } 
          </Text>
        </View>
      </View>
      <View>
        <Button
            onPress={() =>  alert(card.answer)}
            title="Click to show answer"
          />
        </View>
      <View style={allstyles.VQanswerButtonsContainer}>
        <SubmitButton
          style={[allstyles.button, allstyles.VQincorrectButton]}
          onPress={() => card.answer === 'wrong' ? this.nextQuestion(1) : this.nextQuestion(0) }>
          <FontAwesome
            name="thumbs-down"
            size={20}
            color={gray}
            style={{ marginBottom: 8 }}
          />{' '}
          Incorrect!
        </SubmitButton>
        <SubmitButton
          style={[allstyles.button, allstyles.VQcorrectButton]}
          onPress={() => card.answer === 'correct' ? this.nextQuestion(1) : this.nextQuestion(0) }>
          <FontAwesome
            name="thumbs-up"
            size={20}
            color={white}
            style={{ marginBottom: 8 }}
          />{' '}
          Correct!
        </SubmitButton>
      </View>
      <View style={allstyles.VQprogressContainer}>
        <Text style={{ color: blue, textAlign: 'center' }}>
          Card {this.state.cards + 1} of {deck.questions.length}
        </Text>
      </View>
    </View>
  );
}
}

function mapStateToProps(state, { navigation }) {
  const { deckTitle } = navigation.state.params;

  return {
    deck: state[deckTitle]
  }
}

export default connect(mapStateToProps)(ViewQuestion);

