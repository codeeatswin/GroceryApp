import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { myColors } from '../utils/MyColors';
import { StatusBar } from 'expo-status-bar';
import mainImage from '../../assets/mainIcon.png';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const navigate = useNavigation();

  const [isVisbile, setIsvisbile] = useState(true);
  const [userCrendetials, setUserCrendetials] = useState({
    email: '',
    password: '',
    username: '',
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: myColors.secondary }}>
      <StatusBar />
      <ScrollView style={{ flex: 1, paddingTop: 30 }}>
        <Image style={{ alignSelf: 'center' }} source={mainImage} />
        <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
          <Text
            style={{ color: myColors.third, fontSize: 24, fontWeight: '500' }}
          >
            Sign up
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              color: 'gray',
              marginTop: 10,
            }}
          >
            Enter your credentials to continue
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: 'gray',
              marginTop: 40,
            }}
          >
            Username
          </Text>
          <TextInput
            keyboardType='name-phone-pad'
            maxLength={9}
            style={{
              borderColor: '#e3e3e3',
              borderBottomWidth: 2,
              fontSize: 16,
              marginTop: 15,
            }}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: 'gray',
              marginTop: 30,
            }}
          >
            Email
          </Text>
          <TextInput
          value={userCrendetials.email}
          onChangeText={(value)=>{setUserCrendetials({...userCrendetials,email:value})}}
            keyboardType='email-address'
            style={{
              borderColor: '#e3e3e3',
              borderBottomWidth: 2,
              fontSize: 16,
              marginTop: 15,
            }}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: 'gray',
              marginTop: 30,
            }}
          >
            password
          </Text>
          <View
            style={{
              borderColor: '#e3e3e3',
              borderBottomWidth: 2,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <TextInput
              secureTextEntry={isVisbile}
              keyboardType='ascii-capable'
              maxLength={6}
              style={{
                fontSize: 16,
                marginTop: 15,
                flex: 0.9,
              }}
            />
            <Ionicons
              onPress={() => setIsvisbile(!isVisbile)}
              name={isVisbile ? 'eye-off-outline' : 'eye-outline'}
              size={24}
              color='black'
            />
          </View>

          <Text
            numberOfLines={2}
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: 'black',
              marginTop: 15,
              letterSpacing: 0.7,
              lineHeight: 25,
              width: '95%',
              opacity: 0.7,
            }}
          >
            By continuing you agree to our{' '}
            <Text style={{ color: 'red' }}>Terms of Service</Text> and Privacy
            Policy.
          </Text>
          <TouchableOpacity
            onPress={() => {
              console.log('press');
            }}
            style={{
              backgroundColor: myColors.primary,
              marginTop: 30,
              height: 70,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 19,
                color: myColors.secondary,
                fontWeight: '500',
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
              gap: 5,
            }}
          >
            <Text style={{ fontSize: 16 }}>Alreday have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate.replace('Login');
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: myColors.primary,
                  fontWeight: '600',
                }}
              >
                Login Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
