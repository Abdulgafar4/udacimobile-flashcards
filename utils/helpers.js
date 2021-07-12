import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Permissions from "expo-permissions";
import * as Notifications   from 'expo-notifications';

const NOTIFICATION_KEY = "mobileflashcards:notifications";

function createNotification() {
  return {
    title: "Quiz Yo Self!",
    body: "👋 don't forget to quiz yourself today!",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true
    }
  };
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if(data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if(status === 'granted') {
              Notifications.cancelScheduledNotificationAsync()

              let tommorow = new Date();
              tommorow.setDate(tommorow.getDate() + 1);
              tommorow.setHours(20);
              tommorow.setMinutes(0);

              Notifications.scheduleNotificationAsync(
                createNotification(),
                {
                  time: tommorow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
            }
          })
      }
    })
}

export async function clearLocalNotification() {
  const result = await AsyncStorage.removeItem(NOTIFICATION_KEY);
  return Notifications.cancelAllScheduledNotificationsAsync(result);
}