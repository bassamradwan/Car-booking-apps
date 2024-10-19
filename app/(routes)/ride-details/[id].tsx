import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router';
import { getAvailableRidesForPassengersById } from '@/hooks/mockFunctions';
import { Ride } from '@/types/types';

export default function RideDetails() {
    const [dataRide,setdataRide]=useState<Ride>()
    const { id } = useLocalSearchParams();
const rideId = id;
useEffect(() => {
    const getRideById=()=>{
        const data =getAvailableRidesForPassengersById(id)
       setdataRide(data)
        }
        getRideById(); 
},[])

  return (
    <View style={{padding:40}}>
      <Text>RideDetails {id}</Text>
      <Text>{dataRide?.price}</Text>
      <Text>{dataRide?.endCityId}</Text>

    </View>
  )
}