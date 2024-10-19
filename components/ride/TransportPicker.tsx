import React from 'react';
import { View, FlatList, StyleSheet} from 'react-native';
import { Card, Avatar, Button  } from 'react-native-paper';

// تعريف نوع Transportation
interface Transport {
  id: string;
  name: string;
  img: string; // إضافة حقل الصورة
}

// تعريف نوع الخصائص
interface TransportPickerProps {
  transports: Transport[]; // قائمة وسائل النقل
  onSelectTransport: (transport: Transport) => void; // دالة لاختيار وسيلة النقل
}

const TransportPicker: React.FC<TransportPickerProps> = ({ transports, onSelectTransport }) => {
  // دالة لرسم وسائل النقل
  const renderTransport = ({ item }: { item: Transport }) => (
    <Card style={styles.card}>
      <Card.Title
        title={item.name}
        left={(props) => <Avatar.Image {...props} source={{ uri: item.img }} size={60} />}
        right={(props) => (
          <Card.Actions>
            <Button mode="contained" onPress={() => onSelectTransport(item)}>
              اختيار
            </Button>
          </Card.Actions>
        )}
        leftStyle={styles.left}
        titleStyle={{fontWeight:'bold'}}
      />
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={transports}
        keyExtractor={(item) => item.id}
        renderItem={renderTransport}
        nestedScrollEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  card: {
    margin: 10,
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

export default TransportPicker;
