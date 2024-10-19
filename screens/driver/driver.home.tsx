import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, Alert } from 'react-native';
import { useNavigation } from 'expo-router';
import { getAvailableRidesForDrivers ,acceptRideDrive,cancelRide} from '@/hooks/mockFunctions';
import CardRide from '@/components/cardRide';
import { useAuth } from '@/context/AuthContext';
import CardStete from '@/components/drive/cardStete';
import SearchScreen from '../search.screen';


export default function DriverHome() {
  const navigation = useNavigation();
  const availableRidesForDrivers = getAvailableRidesForDrivers();



    

 const {user} = useAuth()

 useEffect(() => {
  // console.log("User Object in DriverHome: ", user);
}, [user]);

    return (
    

    <View style={styles.container}>
      <Text style={styles.title}>مرحباً، أنت في لوحة تحكم السائق</Text>
    <SearchScreen/>
    
      <View style={styles.containerCard} >
      <CardStete
  title='مكتمل'
  subtitle='10'
  iconColor='green'
  iconName='check-circle'
/>
<CardStete
  title='مقبول'
  subtitle='5'
  iconColor='blue'
  iconName='thumbs-up'
/>
<CardStete
  title='معلق'
  subtitle='7'
  iconColor='orange'
  iconName='hourglass-half'
/>
<CardStete
  title='ملغي'
  subtitle='3'
  iconColor='red'
  iconName='times-circle'
/>

      </View>
      <FlatList
     data={availableRidesForDrivers} 
     horizontal
     renderItem={({ item }) => (
      <CardRide 
    {...item}
   
    userId={user?.id || "unknown"}
      
      />
     )}
     keyExtractor={(item) => item.rideId.toString()}
     showsVerticalScrollIndicator={false}
     contentContainerStyle={{ paddingHorizontal: 20 }}
   />
      <Button
        title="إنشاء رحلة جديدة"
      />
      <Button
        title="عرض الطلبات"
      />
    </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerCard:{
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between', 
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontFamily: 'Noto-Kufi-Arabic-Bold',
  },


});

