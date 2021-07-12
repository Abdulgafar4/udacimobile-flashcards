import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import allstyles from '../utils/style';
import SubmitButton from './SubmitButton';
import PropTypes from 'prop-types';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers';
import { deleteDeck } from '../actions';
import DeleteButton from './DeleteButton';
import { red } from '../utils/colors';
import { removeDecks } from '../utils/api';

class DeckCards extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    deleteDeck: PropTypes.func.isRequired,
    deck: PropTypes.object,
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.deckTitle,
    };
  };

  startQuiz = () => {
    const { navigation } = this.props;
    navigation.navigate('ViewQuestion', {
      deckTitle: navigation.state.params.deckTitle,
    });
    clearLocalNotification().then(setLocalNotification);
  };

  openAddCard = () => {
    const { navigation } = this.props;
    navigation.navigate('CreateDecksQuestion', {
      deckTitle: navigation.state.params.deckTitle,
    });
  };
  handleDelete = (id) => {
    const { deleteDeck, navigation } = this.props;

    deleteDeck(id);
    removeDecks(id);

    navigation.goBack();
  };

  render() {
    const { deck } = this.props;
    return (
      <View style={allstyles.NQdeckCard}>
        <View style={allstyles.container}>
          <Text style={allstyles.title}>{deck.title}</Text>
          <Text style={allstyles.subtitle}>
            {deck.questions && deck.questions.length} Cards
          </Text>
        </View>
        <View style={allstyles.buttonContainer}>
          <SubmitButton
            style={[
              allstyles.button,
              deck.questions && deck.questions.length > 0
                ? allstyles.addCardButton
                : allstyles.startQuizButton,
            ]}
            onPress={this.openAddCard}>
            Add New Cards
          </SubmitButton>
          {deck.questions && deck.questions.length > 0 && (
            <SubmitButton
              style={[allstyles.button, allstyles.startQuizButton]}
              onPress={this.startQuiz}>
              Start The Quiz
            </SubmitButton>
          )}
        </View>
        <DeleteButton
          style={{ color: red, marginBottom: 5 }}
          onPress={() => this.handleDelete(deck.title)}>
          Delete Deck
        </DeleteButton>
      </View>
    );
  }
}

function mapStateToProps(state, { navigation }) {
  const { deckTitle } = navigation.state.params;

  return {
    deck: state[deckTitle],
  };
}

export default connect(mapStateToProps, { deleteDeck })(DeckCards);
