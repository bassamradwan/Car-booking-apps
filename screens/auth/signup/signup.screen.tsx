import { View, Text, ScrollView, Image, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Entypo, FontAwesome, Fontisto, Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { commonStyles } from '@/styles/common/common.style';
import { Switch } from 'react-native-paper';

export default function SignupScreen() {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [buttonSpinner, setButtonSpinner] = useState(false);
    const [userInfo, setUserInfo] = useState({
      name: "",
      email: "",
      password: "",
    });
    const [required, setRequired] = useState("");
    const [error, setError] = useState({
      password: "",
    });
    const[driver, setDriver] = useState("")
const [isSwitchOn, setIsSwitchOn] =useState(false)
const onToggleSwitch = () =>{
  setIsSwitchOn(!isSwitchOn);
  setDriver('driver')

}
  const handleSignIn =()=>{
    // router.push("/(routes)/login")
if (driver) {
  router.push("/(routes)/driver-signup")
}
    console.log(driver)
  }

  return (
    <LinearGradient
    colors={["#E5ECF9", "#F6F7F9"]}
    style={{ flex: 1, paddingTop: 20 }}
  >
    <ScrollView>
      <Image
        style={styles.signInImage}
        source={require("@/assets/sign-in/signup.png")}
      />
      <Text style={[styles.welcomeText, { fontFamily: "Raleway_700Bold" }]}>
     ابدأ الان !
      </Text>
      <Text style={styles.learningText}>
        سجل الان حسابك الجديد للحصول على مميزات وصلنى
      </Text>
      <View style={styles.inputContainer}>
        <View>
          <TextInput
            style={[styles.input, { paddingLeft: 40, marginBottom: -12 }]}
            keyboardType="default"
            value={userInfo.name}
            placeholder="shahriar sajeeb"
            onChangeText={(value) =>
              setUserInfo({ ...userInfo, name: value })
            }
          />
          <AntDesign
            style={{ position: "absolute", left: 26, top: 14 }}
            name="user"
            size={20}
            color={"#A1A1A1"}
          />
        </View>
        <View>
          <TextInput
            style={[styles.input, { paddingLeft: 40 }]}
            keyboardType="email-address"
            value={userInfo.email}
            placeholder="support@becodemy.com"
            onChangeText={(value) =>
              setUserInfo({ ...userInfo, email: value })
            }
          />
          <Fontisto
            style={{ position: "absolute", left: 26, top: 17.8 }}
            name="email"
            size={20}
            color={"#A1A1A1"}
          />
          {required && (
            <View style={commonStyles.errorContainer}>
              <Entypo name="cross" size={18} color={"red"} />
            </View>
          )}
          <View style={{ marginTop: 15 }}>
            <TextInput
              style={commonStyles.input}
              keyboardType="default"
              secureTextEntry={!isPasswordVisible}
              defaultValue=""
              placeholder="********"
            //   onChangeText={handlePasswordValidation}
            />
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch}  />
            <Text>سائق؟</Text>
            <TouchableOpacity
              style={styles.visibleIcon}
              onPress={() => setPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? (
                <Ionicons
                  name="eye-off-outline"
                  size={23}
                  color={"#747474"}
                />
              ) : (
                <Ionicons name="eye-outline" size={23} color={"#747474"} />
              )}
            </TouchableOpacity>
            <SimpleLineIcons
              style={styles.icon2}
              name="lock"
              size={20}
              color={"#A1A1A1"}
            />
          </View>
          {error.password && (
            <View style={[commonStyles.errorContainer, { top: 145 }]}>
              <Entypo name="cross" size={18} color={"red"} />
              <Text style={{ color: "red", fontSize: 11, marginTop: -1 }}>
                {error.password}
              </Text>
            </View>
          )}

          <TouchableOpacity
            style={{
              padding: 16,
              borderRadius: 8,
              marginHorizontal: 16,
              backgroundColor: "#2467EC",
              marginTop: 15,
            }}
            onPress={handleSignIn}
          >
            {buttonSpinner ? (
              <ActivityIndicator size="small" color={"white"} />
            ) : (
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 16,
                  fontFamily: "Raleway_700Bold",
                }}
              >
              انشاء حساب
              </Text>
            )}
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
              gap: 10,
            }}
          >
            <TouchableOpacity>
              <FontAwesome name="google" size={30} color={"red"}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name="facebook" size={30} color={"#2467EC"} />
            </TouchableOpacity>
          </View>

          <View style={styles.signupRedirect}>
          <TouchableOpacity onPress={()=> router.push("/(routes)/login") }>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Raleway_600SemiBold",
                  color: "#2467EC",
                  marginLeft: 5,
                }}
              >
                تسجيل دخول
              </Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 18, fontFamily: "Raleway_600SemiBold" }}>
              هل لديك حساب بالفعل؟
            </Text>

          </View>
        </View>
      </View>
    </ScrollView>
  </LinearGradient>
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
    visibleIcon: {
      position: "absolute",
      right: 30,
      top: 15,
    },
    icon2: {
      position: "absolute",
      left: 23,
      top: 17.8,
      marginTop: -2,
    },
    forgotSection: {
      marginHorizontal: 16,
      textAlign: "right",
      fontSize: 16,
      marginTop: 10,
    },
    signupRedirect: {
      flexDirection: "row",
      marginHorizontal: 16,
      justifyContent: "center",
      marginBottom: 20,
      marginTop: 20,
    },
  });