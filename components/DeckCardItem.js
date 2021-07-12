import React from 'react';
import { Text, TouchableOpacity } from "react-native";
import allstyles from '../utils/style';

function DeckCardItem({ item, navigation }) {
    return (
        <TouchableOpacity
          style={allstyles.item}
          onPress={() => navigation.navigate("DeckCards", { deckTitle: item.title }
          )}>
          <Text style={allstyles.deckTitle}>{item.title}</Text>
          <Text style={allstyles.cardCount}>
              {item.questions && item.questions.length} Cards
          </Text>
        </TouchableOpacity>
    )
}

export default DeckCardItem
