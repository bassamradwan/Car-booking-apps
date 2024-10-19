import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useAuth } from '@/context/AuthContext'

export default function UserDetails() {
    // const {id} = useLocalSearchParams()
    const {user} = useAuth()
  return (
    <View style={{padding:40}}>
      <Text>User Details {user?.id}</Text>
      <Text>User Name: {user?.name}</Text>
      <Text>User Email: {user?.email}</Text>
      <Text>User Type: {user?.type}</Text>
       
    </View>
  )
}