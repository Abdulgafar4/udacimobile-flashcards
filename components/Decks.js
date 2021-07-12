import React, { Component } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import DeckCardItem from './DeckCardItem';
import * as apiDATA from '../utils/api';
import { connect } from 'react-redux';
import { receiveDecks } from '../actions';
import { FontAwesome } from '@expo/vector-icons';
import { gray, blue } from '../utils/colors';



const cleanData = (data) => {
  let out = []
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    if (element.title && typeof element.title === "string") out.push(element)
  }
  return out
}

class Decks extends Component {

  state = {
    ready: false,
  };
  componentDidMount = () => {
    const { receiveDecks } = this.props;
    apiDATA
      .getDecks()
      .then((decks) => receiveDecks(decks))
      .then(() => this.setState(() => ({ ready: true })));
  };

  keyExtractor = (item) => item.title;

  renderItem = ({ item }) => {
    return <DeckCardItem item={item} />;
  };
  render() {
    const { decks } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {decks.length > 0 && (
            <FlatList
              data={cleanData(decks)}
              keyExtractor={this.keyExtractor}
              renderItem={({ item }) => <DeckCardItem item={item} navigation={this.props.navigation} />}
            />
          )}
        </View>
        <Text style={styles.notice}>
          <FontAwesome name="info-circle" size={14} color={gray} /> Please After You Delete Deck Cards Reload 
        </Text>
      </View>
    );
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

function mapStateToProps(decks) {
  const deckArray = [];
  for (let deck in decks) {
    deckArray.push(decks[deck]);
  }
  return {
    decks: deckArray,
  };
}

export default connect(mapStateToProps, { receiveDecks })(Decks);
