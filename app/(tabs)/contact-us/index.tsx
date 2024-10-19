import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, Linking, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Button, Card, Paragraph, TextInput } from 'react-native-paper';

const ContactUsScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // بيانات التواصل
  const whatsappNumber = '+201145951990';
  const phoneNumber = '+201145951990';
  const supportEmail = 'support@myapp.com';

  const handleSendMessage = () => {
    if (!name || !email || !message) {
      Alert.alert('خطأ', 'يرجى ملء جميع الحقول');
      return;
    }

    // منطق إرسال الرسالة للدعم
    console.log('الرسالة المرسلة:', { name, email, message });
    Alert.alert('تم الإرسال', 'شكراً لتواصلك معنا! سيتم الرد عليك في أقرب وقت.');

    // إعادة تعيين الحقول بعد الإرسال
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleWhatsAppPress = () => {
    Linking.openURL(`whatsapp://send?phone=${whatsappNumber}`);
  };

  const handlePhonePress = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const handleEmailPress = () => {
    Linking.openURL(`mailto:${supportEmail}`);
  };

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS ===  "ios" ? 'padding' : 'height'}
  >
    <ScrollView>
    <View style={styles.container}>
      {/* صورة في الأعلى */}
  
 <Card.Cover
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ynAsO24UcPXJ_bopYSR3myNG-e1GpoSJ2w&s",
              }}
              style={{width: "100%"}}
            />
      <Text style={styles.heading}>تواصل معنا</Text>

      {/* بيانات التواصل مع أيقونات */}
      <View style={styles.contactInfo}>
        <View style={styles.contactItem}>
          <FontAwesome name="whatsapp" size={24} color="green" style={styles.icon} />
          <Text style={styles.contactText} onPress={handleWhatsAppPress}>
          {whatsappNumber}   : WhatsApp
          </Text>
        </View>

        <View style={styles.contactItem}>
          <FontAwesome name="phone" size={24} color="blue" style={styles.icon} />
          <Text style={styles.contactText} onPress={handlePhonePress}>
            <Paragraph>الهاتف : </Paragraph>
            {phoneNumber} 
          </Text>
        </View>

        <View style={styles.contactItem}>
          <FontAwesome name="envelope" size={24} color="red" style={styles.icon} />
          <Text style={styles.contactText} onPress={handleEmailPress}>
          {supportEmail}
          <Paragraph> : البريد الالكترونى</Paragraph>

          </Text>
        </View>
      </View>

      {/* نموذج إرسال رسالة */}
      <TextInput
        style={styles.input}
        placeholder="اسمك"
        mode='outlined'
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="البريد الإلكتروني"
        value={email}
        onChangeText={setEmail}
        mode='outlined'
        keyboardType="email-address"
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="رسالتك"
        value={message}
        mode='outlined'
        onChangeText={setMessage}
        multiline={true}
        numberOfLines={4}
      />

      <Button mode='contained' onPress={handleSendMessage} >
        إرسال الرسالة
      </Button>
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: '#F8F9FA',
    // paddingVertical: 20,
    margin: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#674FA3',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
  },
  headerImage: {
    width: '100%',
    // height: 150,
    marginBottom: 20,
    borderRadius: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  contactInfo: {
    marginBottom: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    direction:'rtl'
  },
  icon: {
    marginRight: 10,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#674FA3', // لضبط اللون
    textDecorationLine: 'none', // إزالة الخط السفلي
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
  },
  textArea: {
    height: 100,
  },
});

export default ContactUsScreen;
