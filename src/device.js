import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'blip-device-id';

function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (char) => {
    const rand = Math.floor(Math.random() * 16);
    const value = char === 'x' ? rand : (rand & 0x3) | 0x8;
    return value.toString(16);
  });
}

export async function deviceId() {
  const existing = await AsyncStorage.getItem(KEY);
  if (existing) {
    return existing;
  }

  const created = uuid();
  await AsyncStorage.setItem(KEY, created);
  return created;
}
