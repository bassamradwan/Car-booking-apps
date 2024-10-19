import { StyleSheet, View} from 'react-native'
import React from 'react'
import { Avatar, Card, IconButton, Text } from 'react-native-paper'
import { FontAwesome, Ionicons } from '@expo/vector-icons'


interface CardProps {
    title:string;
    subtitle:string,
    iconName?:string,
    iconColor:string,
}
    
const CardStete:React.FC<CardProps>= ({title,subtitle,iconColor,iconName})=> {
  return (
    <Card 
    style={{width:"48%" ,marginBottom:10}}
    >
    <Card.Content >
    <View style={styles.row}>
    <FontAwesome name={iconName} color={iconColor} size={28} />
    <Text variant="titleLarge" style={{color:iconColor,paddingHorizontal:10,fontWeight:"bold" ,}} >{ title}</Text>
      </View>
      <Text variant="titleLarge" style={{textAlign:'center',fontSize:30 ,fontWeight:"bold" ,color:iconColor}} >{ subtitle}</Text>

    </Card.Content>
    </Card>
  )
}
export default CardStete;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    textAlign:'center',
    // padding:6,
  },
});