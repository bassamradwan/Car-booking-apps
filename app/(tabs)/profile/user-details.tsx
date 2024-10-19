import { View, Text } from 'react-native'
import React from 'react'
import { useAuth } from '@/context/AuthContext'

export default function userdetails() {
    const {user}=useAuth()
  return (
    <View>
      <Text>userdetails</Text>
      <Text>Username: {user?.name}</Text>
      <Text>Email: {user?.email}</Text>
      <Text>Phone: {user?.type}</Text>
      <Text>Address: {user?.password}</Text>
    </View>
  )
}