// AdCard.js
import { AdsProps } from '@/types';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button, Card, shadow } from 'react-native-paper';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

const AdCard:React.FC<AdsProps> = ({ title, description, imageUrl,Brand_name,brand_link }) => {
  return (
    <Card style={styles.container}>
        <Card.Cover style={styles.image} source={{ uri: imageUrl }} />
      <Card.Title title={title} subtitle={description} 
      />
      <Card.Actions>
      <Button
     >
        <Text style={styles.button}>{Brand_name}</Text>
 
    </Button>
      <Button >
      تصفح العرض
      </Button>

      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    elevation: 3, // لإضافة ظل للكارد
    alignItems: 'center',
  },
  image: {
    // width: wp("70%"),
    height: hp("25%"),
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontFamily:"Noto-Kufi-Arabic-Bold",
    fontWeight: 'bold',
    marginVertical: 5,
  },
  description: {
    fontSize: 14,
    fontFamily:"Noto-Kufi-Arabic-Regular",
    textAlign: 'center',
  },
button:{
    fontSize: 16,
    fontWeight: 'bold',

  },

});

export default AdCard;
