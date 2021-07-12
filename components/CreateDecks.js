import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import allstyles from "../utils/style";
import SubmitButton from "./SubmitButton";
import { connect } from "react-redux";
import  { createDeck }  from "../actions";
import * as apiDATA from "../utils/api";
import { red } from "../utils/colors";


class CreateDecks extends Component {
  state = {
    title: "",
    error: false,
  };

  handleCreateDecks = () => {
    const { title } = this.state;
    const { createDeck, navigation } = this.props;
    if (title) {
      apiDATA.saveDeckTitle(title).then((deck) => {
        createDeck(deck);
        this.setState({ title: "", error: false });
        navigation.navigate("DeckCards", { deckTitle: title });
      });
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <TouchableWithoutFeedback>
        <KeyboardAvoidingView style={allstyles.cdcontainer}>
          <Text style={allstyles.title}>Create Your Decks Title</Text>
          <TextInput
            style={[
              allstyles.textinput,
              this.state.error ? { borderColor: red } : "",
            ]}
            autoCorrect={false}
            placeholder="Create Your Deck..."
            value={this.state.title}
            onChangeText={(text) =>
              this.setState({ title: text, error: false })
            }
            onSubmitEditing={this.handleCreateDecks}
          />
          <SubmitButton
            style={[allstyles.button, allstyles.submitButton]}
            onPress={this.handleCreateDecks}
          >
            Submit
          </SubmitButton>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default  connect (mapStateToProps,{createDeck})( CreateDecks )
