import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default function BootScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.pin}>
        <View style={styles.pinHead}>
          <View style={styles.pinHole} />
        </View>
        <View style={styles.pinPoint} />
      </View>
      <Text style={styles.word}>
        <Text style={styles.ko}>KO</Text>
        staa
      </Text>
      <ActivityIndicator color="#1c1b19" style={styles.spinner} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d9d6d0',
  },
  pin: {
    width: 64,
    height: 78,
    alignItems: 'center',
  },
  pinHead: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#c2410c',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  pinHole: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#f6f4ef',
  },
  pinPoint: {
    position: 'absolute',
    bottom: 8,
    width: 22,
    height: 22,
    backgroundColor: '#c2410c',
    transform: [{ rotate: '45deg' }],
  },
  word: {
    marginTop: 8,
    color: '#1c1b19',
    fontSize: 40,
    fontWeight: '700',
    letterSpacing: -1.4,
  },
  ko: { color: '#c2410c' },
  spinner: { marginTop: 28 },
});
