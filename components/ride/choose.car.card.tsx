import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Button, Card } from 'react-native-paper'


interface Car {
    id: string;
    name: string;
    img: string;
  }

  const cars =[
    {id:'1',name: 'مكروباص' , img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuS1wuSVYXlUTBBNCPPJ9__M9MmTVsNiWRUbwYWkwVaEHQatB7Yk3zx3kZ65xkAS5LnDc&usqp=CAU"},
    {id:'2',name: 'توكتوك' , img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqJRyfUNonpxbvpWr-uOvY2k0piV0nNrBxsw&s"},
    {id:'3',name: 'موتوسيكل' , img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd0qSeOsZpuGmLp9sDmMAULSeBqQydW1eKsg&s"},
    {id:'4',name: 'ملاكى' , img:"https://www.dbmena.com/wp-content/uploads/2022/08/desarrollo-app-taxi.jpg"},
]
export default function ChooseCarCard() {

    const [selectedCar, setSelectedCar] = useState<Car|null>(null)


    const handelChooseCar= (car:Car)=>{
        setSelectedCar(car)
        console.log('Pressed',car)
    }

    const renderCar = ({ item }: { item: Car }) => (
        <Card style={{marginVertical:10}}>
          <Card.Title
            title={item.name}
            left={(props) => <Avatar.Image {...props} source={{ uri: item.img }}  />}
            right={(props) => (
              <Card.Actions>
                <Button mode='contained' onPress={() => handelChooseCar(item)}>
                  اختيار
                </Button>
              </Card.Actions>
            )}
            leftStyle={styles.left}
          />
        </Card>
      );

   
  return (
  <View style={styles.container}>
  <Text style={styles.text}> اختار نوع المواصلة </Text>

  <FlatList
      data={cars}
      keyExtractor={(item) => item.id}
      renderItem={renderCar}
    />
{/* <Card style={{margin:10}}  >
    <Card.Title title={cars[0].name} 
    left={(props)=><Avatar.Image {...props} source={{uri:cars[0].img}} size={60} />}
    right={(props)=>
        <Card.Actions {...props}>
            <Button mode='contained' >اختيار</Button>
      </Card.Actions>
}
leftStyle={styles.left}
    />
  </Card> */}
  </View>

  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        textAlign:"center",
        backgroundColor: "white",
        padding:20,
        borderRadius:20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        elevation: 5,
        margin:10,
    },
    text:{
        textAlign:"center",
        fontSize:16,
        fontWeight:'bold',
        marginBottom:10,
    },
    left: {
        flex: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        elevation: 5,
    }
});