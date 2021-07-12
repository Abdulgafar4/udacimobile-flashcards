import AsyncStorage from '@react-native-async-storage/async-storage';

export const STORAGE_KEY = "mobileflashcard:decks";

export async function getDecks() {
  const decks = await AsyncStorage.getItem(STORAGE_KEY);
  return JSON.parse(decks);
}

export async function getDeck(id) {
  const decks = await AsyncStorage.getItem(STORAGE_KEY);
  return JSON.parse(decks)[id];
}

export async function saveDeckTitle(title) {
  await AsyncStorage.mergeItem(
    STORAGE_KEY,
    JSON.stringify({
      [title]: {
        title,
        questions: []
      }
    })
  );
  return await getDeck(title);
}

export function addCardToDeck(title, card) {
  return AsyncStorage.getItem(STORAGE_KEY).then(results => {
    const decks = JSON.parse(results);
    decks[title] && decks[title].questions.push(card);
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks));
  });
}

export async function removeDecks(key) {
  try {
  const results = await AsyncStorage.getItem(STORAGE_KEY);
  const decks = JSON.parse(results);
  decks[key] = undefined;
  delete decks[key];
  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks))
  } catch (err) {
    console.log(err);
  }
}