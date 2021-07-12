export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const CREATE_DECK = "CREATE_DECK";
export const DELETE_DECK = "DELETE_DECK";
export const CREATE_CARD = "CREATE_CARD";

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  };
}

export function createDeck(deck) {
  return {
    type: CREATE_DECK,
    deck
  };
}

export function deleteDeck(id) {
  return {
    type: DELETE_DECK,
    id
  };
}

export function createCard({ title, card }) {
  return {
    type: CREATE_CARD,
    title,
    card
  };
}