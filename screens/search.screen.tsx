import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const SearchScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [region, setRegion] = useState({
    latitude: 25.9186, // Latitude افتراضي (مصر)
    longitude: 32.6950, // Longitude افتراضي (مصر)
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  const searchLocation = async () => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(searchQuery)}&format=json&limit=1`
      );
      const data = await response.json();
      if (data.length > 0) {
        const { lat, lon } = data[0];
        setLocation({
          latitude: parseFloat(lat),
          longitude: parseFloat(lon),
        });
      } else {
        Alert.alert('لا توجد نتائج', 'لم يتم العثور على نتائج للبحث.');
      }
    } catch (error) {
      console.error('Error searching location:', error);
      Alert.alert('خطأ', 'حدث خطأ أثناء البحث عن الموقع.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="ابحث عن موقع"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Button title="ابحث" onPress={searchLocation} />

      <MapView style={styles.map}
              region={region}
      >
        <Text>ffj</Text>
        {location && (
          <Marker coordinate={location} title="نتيجة البحث" />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    height: heightPercentageToDP(60),
    width: widthPercentageToDP(100),
  },
  input: {
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  map: {
    flex: 1,
    marginVertical: 10,
  },
});

export default SearchScreen;
