import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  ImageBackground,
  Image,
} from 'react-native';
const SignUpScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://cdn.pixabay.com/photo/2015/05/12/16/01/rose-764267_640.jpg',
      }}
      style={styles.container}>
      {/* <KeyboardAvoidingView style={styles.container}> */}
      <View>
        <Image
          source={require('../assets/ShayarLogo.png')}
          style={{height: 70, width: 200}}
        />
      </View>
      <KeyboardAvoidingView style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="User Name"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => setUsername(text)}
          value={username}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity style={styles.Button} onPress={handleLogin}>
          <Text style={[styles.ButtonText]}>Sign Up</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Text style={{fontWeight: 600, color: 'white'}}>
            Already had accont {' '}</Text>
            <TouchableOpacity >
              <Text style={{color: 'red', fontWeight: 600}} onPress={()=>{navigation.navigate('login')}}>
                login
              </Text>
            </TouchableOpacity>
        </View>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontWeight: 900,
            marginVertical: 5,
          }}>
          OR
        </Text>
        <TouchableOpacity
          style={{...styles.Button, backgroundColor: '#FF6300', opacity: 0.8}}
          onPress={handleLogin}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems:'center'
            }}>
            <Image
              source={require('../assets/googleLogo.png')}
              style={{height: 30, width: 30}}
            />
            <Text style={[styles.ButtonText, {textAlign: 'left'}]}>
              Sign Up with google
            </Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <View style={{position: 'absolute', bottom: 20}}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>
          gazal jindagi ki{' '}
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  inputContainer: {
    marginBottom: 20,
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 10,
    opacity: 0.7,
    color: 'black',
  },
  Button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    opacity: 0.7,
  },
  ButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SignUpScreen;
