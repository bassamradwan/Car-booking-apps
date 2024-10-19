// import {
//   View,
//   Text,
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,
//   SafeAreaView,
//   StyleSheet,
// } from "react-native";
// import React from "react";
// import TripPlanner from "@/components/ride/mapCard";
// import ChooseCarCard from "@/components/ride/choose.car.card";

// export default function RequestRide() {
//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//       style={styles.keyboardAvoidingView}
//     >
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <SafeAreaView style={styles.safeArea}>
//             <TripPlanner/>
//             <ChooseCarCard/>
//         </SafeAreaView>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// }
// const styles = StyleSheet.create({
//     keyboardAvoidingView: {
//       flex: 1,
//     },
//     scrollContainer: {
//       flexGrow: 1,
//       justifyContent: 'center',
//     },
//     safeArea: {
//       flex: 1,
//       justifyContent: 'center',
//     },
//     container: {
//       paddingHorizontal: 16,
//       backgroundColor: '#F8F9FA',
//       paddingVertical: 20,
//       marginHorizontal: 20,
//       borderRadius: 10,
//       elevation: 5,
//       shadowColor: '#674FA3',
//       shadowOffset: { width: 0, height: 2 },
//       shadowOpacity: 0.8,
//       direction:'rtl'
//     },
//     title: {
//       fontSize: 24,
//       fontWeight: 'bold',
//       textAlign: 'center',
//       marginBottom: 20,
//       color:'#674FA3',
//     },
//     input: {
//       marginBottom: 16,
//       // direction:"rtl"
//     },
//     button: {
//       marginTop: 20,
//       paddingVertical: 10,
//       backgroundColor: '#674FA3',
//     },
//     rtl: {
//       textAlign: 'right',
//     },
//   });

import LocationPicker from "@/components/ride/LocationPicker";
import PriceAndTimeInput from "@/components/ride/PriceAndTimeInput";
import TransportPicker from "@/components/ride/TransportPicker";
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  Platform,
} from "react-native";
import { Button, Card, Text } from "react-native-paper";
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
interface Transport {
  id: string;
  name: string;
  img: string; // حقل الصورة
}

const CreateRideScreen: React.FC = () => {
  // تعيين الأنواع لـ useState
  const [locationPermission, setLocationPermission] = useState<boolean | null>(null);
  const [startLocation, setStartLocation] = useState<Coordinates | null>(null);
  const [endLocation, setEndLocation] = useState<Coordinates | null>(null);
  const [selectedTransport, setSelectedTransport] = useState<Transport | null>(
    null
  );
  const [price, setPrice] = useState<string>("");
  const [time, setTime] = useState<string>("");

  // مثال على قائمة وسائل النقل
  const transports: Transport[] = [
    {id:'1',name: 'مكروباص' , img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuS1wuSVYXlUTBBNCPPJ9__M9MmTVsNiWRUbwYWkwVaEHQatB7Yk3zx3kZ65xkAS5LnDc&usqp=CAU"},
    {id:'2',name: 'توكتوك' , img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqJRyfUNonpxbvpWr-uOvY2k0piV0nNrBxsw&s"},
    {id:'3',name: 'موتوسيكل' , img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd0qSeOsZpuGmLp9sDmMAULSeBqQydW1eKsg&s"},
    {id:'4',name: 'ملاكى' , img:"https://www.dbmena.com/wp-content/uploads/2022/08/desarrollo-app-taxi.jpg"},
  ];
  useEffect(() => {
    // الحصول على إذن الوصول إلى الموقع
    const getLocationPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      setLocationPermission(status === 'granted');
      if (status !== 'granted') {
        Alert.alert('إذن مرفوض', 'يجب السماح بالوصول إلى الموقع لاستخدام هذه الميزة.');
        return;
      }

      // الحصول على موقع المستخدم الحالي
      let currentLocation = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = currentLocation.coords;
      setStartLocation({ latitude, longitude });
      // setRegion({
      //   latitude,
      //   longitude,
      //   latitudeDelta: 1.05,
      //   longitudeDelta: 1.05,
      // });
    };

    getLocationPermission();
  }, []);
  const handleCreateRide = () => {
    // تحقق من صحة البيانات
    if (!startLocation || !endLocation) {
      Alert.alert("خطأ", "يرجى اختيار موقعي البداية والنهاية.");
      return;
    }
    if (!selectedTransport) {
      Alert.alert("خطأ", "يرجى اختيار وسيلة النقل.");
      return;
    }
    if (!price) {
      Alert.alert("خطأ", "يرجى إدخال السعر.");
      return;
    }
    if (!time) {
      Alert.alert("خطأ", "يرجى إدخال الوقت.");
      return;
    }

    // تنفيذ منطق إنشاء الرحلة هنا
    console.log("تم إنشاء الرحلة:", {
      startLocation,
      endLocation,
      selectedTransport,
      price,
      time,
    });

    Alert.alert("تم!", "تم إنشاء الرحلة بنجاح.");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" && "android" ? "padding" : "height"}
      //   style={styles.keyboardAvoidingView}
    >
      <ScrollView
      //    contentContainerStyle={styles.scrollContainer}
      >
        <SafeAreaView
        // style={styles.safeArea}
        >
          <View style={styles.container}>
          <Text style={styles.title}>طلب رحلة جديدة</Text>
            <Card.Cover
              source={{
                uri: "https://dqnxlhsgmg1ih.cloudfront.net/storage/attachments/5874/%D8%A3%D8%B3%D8%B7%D9%88%D9%84-%D8%A7%D9%84%D9%80%D8%AF%D9%8A%D9%84%D9%81%D8%B1%D9%8A-%D8%B3%D9%8A%D8%AA%D8%B6%D8%A7%D8%B9%D9%81-3-%D9%85%D8%B1%D8%A7%D8%AA-%D8%A8%D9%86%D9%87%D8%A7%D9%8A%D8%A9-2022-1642691533803.jpeg",
              }}
              style={{width: "100%"}}
            />
           
            <Text style={styles.text} > قوم بأختيار نقطة بداية والنهاية الرحلة </Text>
            <LocationPicker
              onPickStartLocation={setStartLocation}
              onPickEndLocation={setEndLocation}
            />
            <Text style={styles.text} > قوم بأختيار وسيلة المواصلات للرحلة </Text>
            <TransportPicker
              onSelectTransport={setSelectedTransport}
              transports={transports}
            />
            <Text style={styles.text} > قوم بأختيار وقت وسعر الرحلة </Text>
            <PriceAndTimeInput
              onPriceChange={setPrice}
              onTimeChange={setTime}
            />
                   <Button
              mode="contained"
              maxFontSizeMultiplier={20}
              uppercase={true}
              compact={true}
              onPress={handleCreateRide}
              style={styles.button}
            >
              طلب رحلة
            </Button>
            {/* <Button title="إنشاء الرحلة" onPress={handleCreateRide} /> */}
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 16,
    backgroundColor: "#F8F9FA",
    // paddingVertical: 20,
    // marginHorizontal: 20,
    margin:15,
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#674FA3",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    direction: "rtl",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#674FA3",
  },
  text:{
    margin: 10,
    fontSize: 16,
    color: "#674FA3",
    direction:"rtl"
  },
  button: {
    margin:10,
    fontWeight:"bold",
    paddingVertical: 10,
    backgroundColor: '#674FA3',   
  },
});

export default CreateRideScreen;
