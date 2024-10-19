import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper';

export default function DriverSignupScreen() {
    const [car, setCar] = useState('');

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    // style={styles.keyboardAvoidingView}
  >
   <SafeAreaView>
   <ScrollView>
        <Image
          style={styles.signInImage}
          source={require("@/assets/sign-in/sign_in.png")}
        />
        <Text style={[styles.welcomeText]}>مرحبا بك سائق معنا</Text>
        <Text style={styles.learningText}>  يرجى ملئ هذه البيانات لاستكمال عملية انشاء حسابك </Text>
        <View style={styles.inputContainer}>
        <TextInput
              mode="outlined"
              label="وسيلة المواصلات"
              placeholder="مثال: ميكروباص أو ملاكي"
              textColor='#674FA3'
              outlineColor='#674FA3'
              value={car}
              onChangeText={setCar}
             style={styles.input }
              right={<TextInput.Icon icon="car" color="#674FA3" />}
            />
               <TextInput
              mode="outlined"
              label="رقم وسيلة المواصلات"
              placeholder="مثال 588599 "
              textColor='#674FA3'
              outlineColor='#674FA3'
              value={car}
              onChangeText={setCar}
             style={styles.input }
              right={<TextInput.Icon icon="car" color="#674FA3" />}
            />
               <TextInput
              mode="outlined"
              label=" رقم البطاقه الخاصه بك"
              placeholder="مثال:2789102201143 "
              textColor='#674FA3'
              outlineColor='#674FA3'
              value={car}
              onChangeText={setCar}
             style={styles.input }
              right={<TextInput.Icon icon="" color="#674FA3" />}
            />
             <Button mode='contained' >انشاء حساب</Button>
            </View>
            </ScrollView>
            
   </SafeAreaView>
   </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    signInImage: {
        width: "60%",
        height: 250,
        alignSelf: "center",
        marginTop: 50,
      },
      welcomeText: {
        textAlign: "center",
        fontSize: 24,
        fontFamily: "Noto-Kufi-Arabic-Bold",
      },
      learningText: {
        textAlign: "center",
        color: "#575757",
        fontSize: 15,
        marginTop: 5,
        fontFamily: "Noto-Kufi-Arabic-Regular",
      },
      inputContainer: {
        marginHorizontal: 16,
        marginTop: 30,
        rowGap: 30,
      },
      input: {
        height: 55,
        marginHorizontal: 16,
        borderRadius: 8,
        paddingLeft: 35,
        fontSize: 16,
        backgroundColor: "white",
        color: "#A1A1A1",
      },

});