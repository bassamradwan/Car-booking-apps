import { View, Text, I18nManager, Alert } from 'react-native'
import React, { useEffect } from 'react'
import { Redirect } from 'expo-router'
import { useAuth } from '@/context/AuthContext';
export default function index() {
  const { isLoggedIn } = useAuth(); 
  return (
  <>
    <Redirect href={!isLoggedIn?"/(routes)/onbroading":"/(tabs)"} />
  </>
  
  )
}