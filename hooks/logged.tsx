import { router } from 'expo-router';
import React, { useState } from 'react'
import { Alert } from 'react-native';

export default function Logged() {
  const [isLoggedIn, setLoggedIn] = useState(false);
const [loading,setloading] =useState(true)

  const login =()=>{
    setLoggedIn(true)
    setloading(false)
    Alert.alert("true")

  } 
  const logout =()=>{
    setLoggedIn(false)
  }
  return {login,logout ,isLoggedIn ,loading}
}