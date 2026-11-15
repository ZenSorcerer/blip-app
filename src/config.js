import Constants from 'expo-constants';

function devHost() {
  const hostUri = Constants.expoConfig?.hostUri
    || Constants.expoGoConfig?.debuggerHost
    || '';
  const host = String(hostUri).split(':')[0];

  if (!host || host === 'localhost' || host === '127.0.0.1') {
    return 'http://127.0.0.1:8002';
  }

  return `http://${host}:8002`;
}

export const API_URL = process.env.EXPO_PUBLIC_API_URL || devHost();
