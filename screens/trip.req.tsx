// import { View, Text, StyleSheet, Alert } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import MapView, { Marker, PROVIDER_DEFAULT } from 'react-native-maps';
// import { heightPercentageToDP } from 'react-native-responsive-screen';
// import * as Location from 'expo-location';

// export default function ReqScreen() {
//   const [marker, setMarker] = useState<{ latitude: number; longitude: number } | null>(null);
//   const [errorMsg, setErrorMsg] = useState<string | null>(null);
//   const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);

//   const handleMapPress = (event: any) => {
//     const { coordinate } = event.nativeEvent; // الحصول على إحداثيات المكان المضغوط
//     setMarker(coordinate); // تحديث الحالة لإضافة 
//   }

//   useEffect(() => {
//     const requestLocationPermission = async () => {
//       const { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         setErrorMsg('Permission to access location was denied');
//         Alert.alert("إذن الموقع", "يرجى منح إذن الوصول إلى موقعك.");
//         return;
//       }
  
//       getCurrentLocation();
//     };
  
//     const getCurrentLocation = async () => {
//       try {
//         const { coords } = await Location.getCurrentPositionAsync({});
//         setMarker({ latitude: coords.latitude, longitude: coords.longitude });
//       } catch (error:any) {
//         setErrorMsg(error.message);
//       }
//     };
  
//     requestLocationPermission();
//   }, []);

//   return (
//     <View style={styles.container}>
//     <Text style={styles.text}>موقعك الحالي:</Text>
//     <MapView
//       style={StyleSheet.absoluteFillObject}
//       initialRegion={{
//         latitude: marker ? marker.latitude : 25.9186, // Latitude افتراضي
//         longitude: marker ? marker.longitude : 32.6950, // Longitude افتراضي
//         latitudeDelta: 0.05, // مقدار الزوم (يمكنك تعديله)
//         longitudeDelta: 0.05, // مقدار الزوم (يمكنك تعديله)
//       }}
//               onPress={handleMapPress} // إضافة خاصية onPress
//     >
//       {marker && (
//         <Marker
//           coordinate={marker}
//           title="موقعك الحالي"
//           description={`Latitude: ${marker.latitude}, Longitude: ${marker.longitude}`}
//         />
//       )}
//          {marker && (
//         <Marker
//           coordinate={marker}
//           title="تم تحديد الموقع"
//           description={`Latitude: ${marker.latitude}, Longitude: ${marker.longitude}`}
//         />
//       )}
//     </MapView>
//     {errorMsg && <Text style={styles.error}>{errorMsg}</Text>}
//   </View>
//   )
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     position: 'relative', 
//     height: heightPercentageToDP(100),
//     backgroundColor: 'white',
//   },
//   text: {
//     fontSize: 18,
//     padding: 10,
//     backgroundColor: 'white',
//     position: 'absolute',
//     zIndex: 1,
//     top: 10,
//     left: 10,
//   },
//   error: {
//     color: 'red',
//     position: 'absolute',
//     bottom: 10,
//     left: 10,
//   },

// });

// import React, { useState, useEffect } from 'react';
// import { View, TextInput, Button, Alert, StyleSheet, Text } from 'react-native';
// import MapView, { Marker,MapPressEvent, Polyline, MapPolyline } from 'react-native-maps';
// import * as Location from 'expo-location';
// import MapViewDirections from 'react-native-maps-directions';

// interface Coordinates {
//   latitude: number;
//   longitude: number;
// }

// interface TripData {
//   startLocation: {
//     name: string;
//     coordinates: Coordinates;
//   };
//   endLocation: {
//     name: string;
//     coordinates: Coordinates;
//   };
// }

// const TripPlanner: React.FC = () => {
//   const [locationPermission, setLocationPermission] = useState<boolean | null>(null);
//   const [startLocation, setStartLocation] = useState<Coordinates | null>(null);
//   const [endLocation, setEndLocation] = useState<Coordinates | null>(null);
//   const [startLocationName, setStartLocationName] = useState<string>('');
//   const [endLocationName, setEndLocationName] = useState<string>('');
//   const [region, setRegion] = useState({
//     latitude: 25.9186, // Latitude افتراضي (مصر)
//     longitude: 32.6950, // Longitude افتراضي (مصر)
//     latitudeDelta: 0.05,
//     longitudeDelta: 0.05,
//   });
//   const origin = {latitude: 37.3318456, longitude: -122.0296002};
//   const destination = {latitude: 37.771707, longitude: -122.4053769};
//   useEffect(() => {
//     // الحصول على إذن الوصول إلى الموقع
//     const getLocationPermission = async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       setLocationPermission(status === 'granted');
//       if (status !== 'granted') {
//         Alert.alert('إذن مرفوض', 'يجب السماح بالوصول إلى الموقع لاستخدام هذه الميزة.');
//         return;
//       }

//       // الحصول على موقع المستخدم الحالي
//       let currentLocation = await Location.getCurrentPositionAsync({});
//       const { latitude, longitude } = currentLocation.coords;
//       setStartLocation({ latitude, longitude });
//       setRegion({
//         latitude,
//         longitude,
//         latitudeDelta: 0.05,
//         longitudeDelta: 0.05,
//       });
//     };

//     getLocationPermission();
//   }, []);

//   // التعامل مع اختيار نقطة النهاية من الخريطة
//   const handleMapPress = (e: MapPressEvent) => {
//     const { latitude, longitude } = e.nativeEvent.coordinate;
//     setEndLocation({ latitude, longitude });
//   };

//   // حفظ النقاط مع أسمائها
//   const handleSaveTrip = () => {
//     if (!startLocation || !endLocation) {
//       Alert.alert('خطأ', 'يرجى تحديد كل من نقطة البداية ونقطة النهاية.');
//       return;
//     }

//     const tripData: TripData = {
//       startLocation: {
//         name: startLocationName || 'الموقع الحالي',
//         coordinates: startLocation,
//       },
//       endLocation: {
//         name: endLocationName,
//         coordinates: endLocation,
//       },
//     };

//     // هنا يمكنك تخزين tripData في قاعدة البيانات أو معالجتها كما تريد
//     console.log(tripData);
//     Alert.alert('تم الحفظ', 'تم حفظ الرحلة بنجاح.');
//   };

//   return (
//     <View style={styles.container}>
//       {/* إدخال اسم نقطة البداية */}
//       <Text>نقطة البداية (الموقع الحالي):</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="اسم نقطة البداية (اختياري)"
//         value={startLocationName}
//         onChangeText={setStartLocationName}
//       />

//       {/* إدخال اسم نقطة النهاية */}
//       <Text>نقطة النهاية:</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="اسم نقطة النهاية"
//         value={endLocationName}
//         onChangeText={setEndLocationName}
//       />

//       {/* عرض الخريطة */}
//       <MapView
//         style={styles.map}
//         region={region}
//         onRegionChangeComplete={setRegion}
//         onPress={handleMapPress} // يتيح تحديد نقطة النهاية عبر الضغط على الخريطة
//       >
//         {/* علامة نقطة البداية */}
//         {startLocation && (
//           <Marker
//             coordinate={startLocation}
//             title="نقطة البداية"
//             description={startLocationName || 'الموقع الحالي'}
//             pinColor="green"
//           />
//         )}

//         {/* علامة نقطة النهاية */}
//         {endLocation && (
//           <Marker
//             coordinate={endLocation}
//             title="نقطة النهاية"
//             description={endLocationName || 'نقطة نهاية الرحلة'}
//             pinColor="red"
//           />
//         )}
//               {startLocation && endLocation && (
//           <Polyline
//             coordinates={[startLocation, endLocation]} // تمرير الإحداثيات كصفيف
//             strokeColor="blue" // لون الخط
//             strokeWidth={3} // عرض الخط
//           />

//         )}
   
        

//       </MapView>

//       {/* زر حفظ الرحلة */}
//       <Button title="حفظ الرحلة" onPress={handleSaveTrip} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//   },
//   input: {
//     padding: 10,
//     marginVertical: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     backgroundColor: '#fff',
//   },
//   map: {
//     flex: 1,
//     marginVertical: 10,
//   },
// });

// export default TripPlanner;
