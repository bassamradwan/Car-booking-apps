import React from 'react';
import { View,StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';

interface PriceAndTimeInputProps {
  onPriceChange: (price: string) => void;
  onTimeChange: (time: string) => void;
}

const PriceAndTimeInput: React.FC<PriceAndTimeInputProps> = ({ onPriceChange, onTimeChange }) => {
  return (
    <View style={styles.container}>
      {/* <Text>إدخال السعر</Text>
      <TextInput
        style={styles.input}
        placeholder="السعر"
        keyboardType="numeric"
        onChangeText={onPriceChange}
      />
      <Text>إدخال الوقت</Text>
      <TextInput
        style={styles.input}
        placeholder="الوقت بالدقائق"
        keyboardType="numeric"
        onChangeText={onTimeChange}
      /> */}
      <TextInput
              mode="outlined"
              label="السعر"
              placeholder="مثال: 100"
              textColor='#674FA3'
              outlineColor='#674FA3'
              keyboardType="numeric"
              onChangeText={onPriceChange}
              right={<TextInput.Icon icon="cash" color="#674FA3" />}
            />
            <TextInput
              mode="outlined"
              label="وقت الانطلاق"
              placeholder="مثال: 12:00 PM"
              textColor='#674FA3'
              outlineColor='#674FA3'
              onChangeText={onTimeChange}
              keyboardType="numeric"
              right={<TextInput.Icon icon="alarm" color="#674FA3" />}
            />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

export default PriceAndTimeInput;
