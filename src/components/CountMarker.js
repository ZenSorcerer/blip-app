import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Marker } from 'react-native-maps';

export default function CountMarker({ cluster, onPress }) {
  const [tracking, setTracking] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setTracking(false), 400);
    return () => clearTimeout(timer);
  }, [cluster.count]);

  return (
    <Marker
      coordinate={{ latitude: cluster.latitude, longitude: cluster.longitude }}
      anchor={{ x: 0.5, y: 0.5 }}
      tracksViewChanges={tracking}
      zIndex={3}
      onPress={onPress}
    >
      <View style={styles.count} collapsable={false}>
        <Text style={styles.countText}>({cluster.count})</Text>
      </View>
    </Marker>
  );
}

const styles = StyleSheet.create({
  count: {
    minWidth: 46,
    height: 46,
    paddingHorizontal: 10,
    borderRadius: 23,
    backgroundColor: '#1c1b19',
    borderWidth: 2,
    borderColor: '#f6f4ef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countText: { color: '#f6f4ef', fontWeight: '700', fontSize: 15 },
});
