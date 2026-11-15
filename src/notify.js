import { Platform } from 'react-native';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

let asked = false;

export async function notifyLocal(title, body) {
  try {
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('pins', {
        name: 'Пинове наблизо',
        importance: Notifications.AndroidImportance.DEFAULT,
      });
    }

    const current = await Notifications.getPermissionsAsync();
    let status = current.status;
    if (status !== 'granted') {
      if (asked) {
        return;
      }
      asked = true;
      const next = await Notifications.requestPermissionsAsync();
      status = next.status;
    }
    if (status !== 'granted') {
      return;
    }

    await Notifications.scheduleNotificationAsync({
      content: {
        title,
        body,
        sound: null,
        ...(Platform.OS === 'android' ? { channelId: 'pins' } : {}),
      },
      trigger: null,
    });
  } catch {
    // The in-app banner still shows when notifications are unavailable.
  }
}
