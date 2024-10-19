import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import MapView, { MapPressEvent, Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';

// تعريف نوع Location
// interface Location {
//   latitude: number;
//   longitude: number;
// }
interface Coordinates {
    latitude: number;
    longitude: number;
  }
// خصائص المكون LocationPicker
interface LocationPickerProps {
  onPickStartLocation: (location: Coordinates) => void; // دالة تقبل Location
  onPickEndLocation: (location: Coordinates) => void;   // دالة تقبل Location
}

const LocationPicker: React.FC<LocationPickerProps> = ({ onPickStartLocation, onPickEndLocation }) => {
  const [startLocation, setStartLocation] = useState<Coordinates | null>(null); // موقع البداية
  const [endLocation, setEndLocation] = useState<Coordinates | null>(null);     // موقع النهاية
  const [locationPermission, setLocationPermission] = useState<boolean | null>(null);
  const [region, setRegion] = useState({
    latitude: 25.9186, // Latitude افتراضي (مصر)
    longitude: 32.6950, // Longitude افتراضي (مصر)
    latitudeDelta: 1.05,
    longitudeDelta: 1.05,
  });

  // useEffect(() => {
  //   // الحصول على إذن الوصول إلى الموقع
  //   const getLocationPermission = async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     setLocationPermission(status === 'granted');
  //     if (status !== 'granted') {
  //       Alert.alert('إذن مرفوض', 'يجب السماح بالوصول إلى الموقع لاستخدام هذه الميزة.');
  //       return;
  //     }

  //     // الحصول على موقع المستخدم الحالي
  //     let currentLocation = await Location.getCurrentPositionAsync({});
  //     const { latitude, longitude } = currentLocation.coords;
  //     setStartLocation({ latitude, longitude });
  //     setRegion({
  //       latitude,
  //       longitude,
  //       latitudeDelta: 1.05,
  //       longitudeDelta: 1.05,
  //     });
  //   };

  //   getLocationPermission();
  // }, []);
  // التعامل مع الضغط على الخريطة لاختيار موقع البداية
  const handleMapPress = (event: MapPressEvent) => {
    const location: Coordinates = event.nativeEvent.coordinate;

    if (!startLocation) {
      setStartLocation(location); // تعيين موقع البداية
      onPickStartLocation(location); // تمرير الموقع كخاصية
    } else {
      setEndLocation(location); // تعيين موقع النهاية
      onPickEndLocation(location); // تمرير الموقع كخاصية
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        onPress={handleMapPress} // استدعاء عند الضغط على الخريطة
      >
        {startLocation && <Marker
                    pinColor="green"
        coordinate={startLocation} title="موقع البداية" />}
        {endLocation && <Marker  coordinate={endLocation} title="موقع النهاية" />}
        
        {/* إضافة خط يحدد المسار بين الموقعين */}
        {startLocation && endLocation && (
          <Polyline
            coordinates={[startLocation, endLocation]} // نقاط المسار
            strokeColor="blue" // لون الخط
            strokeWidth={4} // عرض الخط
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  map: {
    height: 300,
    marginBottom: 10,
  },
});

export default LocationPicker;
