import { RECEIVE_DECKS, CREATE_DECK, DELETE_DECK, CREATE_CARD } from "../actions";

function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case CREATE_DECK:
      return {
        ...state,
        [action.deck.title]: { ...action.deck }
      };
    case DELETE_DECK:
      const decks = { ...state }; // eslint-disable-line
      delete decks[action.title];
      return {
        ...decks
      };
    case CREATE_CARD:
      const deck = state[action.title]; // eslint-disable-line
      console.log({deck, action, state})
       deck.questions.push(action.card);
      return {
        ...state,
        [action.title]: { ...deck }
      };
    default:
      return state;
  }
}

export default decks;