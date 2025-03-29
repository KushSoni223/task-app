/* eslint-disable react-native/no-inline-styles */
import Icon from '@react-native-vector-icons/fontawesome6';
import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {images, size} from '../../theme';
import {login} from '../../redux/actions';
import {useDispatch} from 'react-redux';

export const SignInScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userLogin = async () => {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    try {
      await dispatch(login(formData, {isUserLogin: true}));
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Plié</Text>
        <Icon name="image" size={50} color="black" />
      </View>

      <View style={styles.formContainer}>
        <View style={styles.innerFOrmContainer}>
          <View>
            <Text>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={e => {
                setEmail(e);
              }}
              placeholder="email@email.com"
              keyboardType="email-address"
            />
          </View>

          <View>
            <Text>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={e => {
                  setPassword(e);
                }}
                placeholder="Password"
                secureTextEntry
              />
              <Icon name="eye" size={20} color="gray" style={styles.eyeIcon} />
            </View>
          </View>
        </View>

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            userLogin();
          }}
          style={{
            backgroundColor: email !== '' && password !== '' ? 'green' : 'gray',
            paddingVertical: size.moderateScale(8),
            paddingHorizontal: size.moderateScale(20),
            alignItems: 'center',
            alignSelf: 'flex-end',
            borderRadius: 8,
            marginTop: size.moderateScale(20),
          }}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>

        <Text style={styles.signupText}>
          Not a member? <Text style={styles.signupLink}>Sign Up Here</Text>
        </Text>

        <View style={styles.socialContainer}>
          <View style={styles.line} />
          <Text>or Sign In with:</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.socialButtons}>
          <Image source={images.imgGoogle} style={styles.socialIcon} />
          <Image
            source={images.imgApple}
            style={{
              width: 32,
              height: 32,
              marginHorizontal: 10,
              objectFit: 'contain',
              //   elevation: size.moderateScale(10),
              backgroundColor: 'white',
            }}
          />
          <Image source={images.imgFacebook} style={styles.socialIcon} />
        </View>

        <TouchableOpacity>
          <Text style={styles.guestText}>Enter as Guest</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    justifyContent: 'space-between',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 50,
    gap: size.moderateScale(50),
  },
  logoText: {fontSize: 40, fontWeight: 'bold'},
  formContainer: {padding: 20, backgroundColor: 'white'},
  innerFOrmContainer: {gap: size.moderateScale(10)},
  input: {
    borderRadius: 8,
    paddingVertical: size.moderateScale(10),
    paddingHorizontal: size.moderateScale(15),
    marginTop: size.moderateScale(8),
    elevation: size.moderateScale(10),
    backgroundColor: '#fff',
  },
  passwordContainer: {position: 'relative'},
  eyeIcon: {position: 'absolute', right: 10, top: 15},
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: size.moderateScale(8),
    color: 'gray',
  },
  signInButton: {
    backgroundColor: 'green',
    paddingVertical: size.moderateScale(8),
    paddingHorizontal: size.moderateScale(20),
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderRadius: 8,
    marginTop: size.moderateScale(20),
  },
  signInText: {color: 'white', fontSize: 16},
  signupText: {
    textAlign: 'right',
    marginTop: 15,
  },
  signupLink: {color: 'blue', textDecorationLine: 'underline'},
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: size.moderateScale(40),
  },
  line: {flex: 1, height: 1, backgroundColor: 'gray', marginHorizontal: 5},
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: size.moderateScale(30),
  },
  socialIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
    backgroundColor: 'white',
  },
  guestText: {textAlign: 'right', marginTop: 10, color: 'gray'},
});
