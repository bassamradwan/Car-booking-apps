import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { addRide } from '@/data/staticData';
import { Avatar, Button, Card, TextInput } from 'react-native-paper';
import { useAuth } from '@/context/AuthContext';

const RequestRideScreen = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [price, setPrice] = useState('');
  const [name, setName] = useState('');
  const [car, setCar] = useState('');
  const [time, setTime] = useState('');
  const {user}=useAuth()

  const handleRequestRide = () => {
    if (pickupLocation && destination && name && car && time) {
      addRide(pickupLocation, destination, time, car, name, price);
      Alert.alert('نجاح', 'تم طلب الرحلة بنجاح');
      // إعادة تعيين الحقول
      setPickupLocation('');
      setDestination('');
      setName('');
      setCar('');
      setTime('');
      setPrice('');
    } else {
      Alert.alert('خطأ', 'يرجى ملء جميع الحقول');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardAvoidingView}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
          <Card.Cover source={{uri:"https://dqnxlhsgmg1ih.cloudfront.net/storage/attachments/5874/%D8%A3%D8%B3%D8%B7%D9%88%D9%84-%D8%A7%D9%84%D9%80%D8%AF%D9%8A%D9%84%D9%81%D8%B1%D9%8A-%D8%B3%D9%8A%D8%AA%D8%B6%D8%A7%D8%B9%D9%81-3-%D9%85%D8%B1%D8%A7%D8%AA-%D8%A8%D9%86%D9%87%D8%A7%D9%8A%D8%A9-2022-1642691533803.jpeg"}} />
            <Text style={styles.title}>طلب رحلة جديدة</Text>
            <TextInput
              mode="outlined"
              label="أسم الرحلة"
              placeholder="العمل أو المنزل"
              textColor='#674FA3'
              outlineColor='#674FA3'
              value={name}
              onChangeText={setName}
             style={[styles.input, styles.rtl]}
              right={<TextInput.Icon icon="home" color="#674FA3" />}
            />
            <TextInput
              mode="outlined"
              label="موقع الانطلاق"
              placeholder="مثال: قنا"
              textColor='#674FA3'
              outlineColor='#674FA3'
              value={pickupLocation}
              onChangeText={setPickupLocation}
             style={[styles.input, styles.rtl]}
              right={<TextInput.Icon icon="map-marker" color="#674FA3" />}
            />
            <TextInput
              mode="outlined"
              label="موقع الوصول"
              placeholder="مثال: قوص"
              textColor='#674FA3'
              outlineColor='#674FA3'
              value={destination}
              onChangeText={setDestination}
             style={[styles.input, styles.rtl]}
              right={<TextInput.Icon icon="map-marker" color="#674FA3" />}
            />
            <TextInput
              mode="outlined"
              label="وسيلة المواصلات"
              placeholder="مثال: ميكروباص أو ملاكي"
              textColor='#674FA3'
              outlineColor='#674FA3'
              value={car}
              onChangeText={setCar}
             style={[styles.input, styles.rtl]}
              right={<TextInput.Icon icon="car" color="#674FA3" />}
            />
            <TextInput
              mode="outlined"
              label="السعر"
              placeholder="مثال: 100"
              textColor='#674FA3'
              outlineColor='#674FA3'
              value={price}
              onChangeText={setPrice}
             style={[styles.input, styles.rtl]}
              right={<TextInput.Icon icon="cash" color="#674FA3" />}
            />
            <TextInput
              mode="outlined"
              label="وقت الانطلاق"
              placeholder="مثال: 12:00 PM"
              textColor='#674FA3'
              outlineColor='#674FA3'
              value={time}
              onChangeText={setTime}
              keyboardType='default'
              style={[styles.input, styles.rtl]}
              right={<TextInput.Icon icon="alarm" color="#674FA3" />}
            />
            <Button
              mode="contained"
              maxFontSizeMultiplier={20}
              uppercase={true}
              compact={true}
              onPress={handleRequestRide}
              style={styles.button}
            >
              طلب رحلة
            </Button>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    paddingHorizontal: 16,
    backgroundColor: '#F8F9FA',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#674FA3',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    direction:'rtl'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color:'#674FA3',
  },
  input: {
    marginBottom: 16,
    // direction:"rtl"
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: '#674FA3',   
  },
  rtl: {
    textAlign: 'right',
  },
});

export default RequestRideScreen;
