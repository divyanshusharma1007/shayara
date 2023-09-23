import {
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';

const category = [
  'shayari',
  'poetry',
  'poem',
  'kavita',
  'gazal',
  'book',
  'rap-song',
  'bhajan',
  'vyang',
];
export default function HomeScreen({navigation}) {
  const [data,setData]=useState()
  useEffect(() => {

    axios.get("https://poetry-backend.onrender.com/random-poem").then(data=>{
      setData(data?.data)
    }).catch(e=>console.log(e))
  }, []);
  return (
    <ImageBackground
      source={{
        uri: 'https://cdn.pixabay.com/photo/2015/05/12/16/01/rose-764267_640.jpg',
      }}
      style={{flex: 1, opacity: 0.5}}>
      <LinearGradient colors={['gray', '#FF9999']} style={{flex: 1}}>
        <View style={{height: 330, padding: 5}}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: 800,
              zIndex: 1,
              marginLeft: 20,
              marginTop: 10,
            }}>
            Poetry Of The Day
          </Text>
          <View
            style={{
              height: 30,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              margin: 20,
              borderRadius: 2,
              shadowColor: 'black',
              shadowOffset: {
                height: 1,
                width: 10,
              },
              shadowRadius: 20,
              elevation: 2,
              shadowOpacity: 100,
              paddingHorizontal:10
            }}>
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontWeight: 600,
                fontSize: 15,
              }}>
              {
                data?.content
              }
            </Text>
          </View>
        </View>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 800,
            zIndex: 1,
            marginLeft: 25,
            marginTop: 10,
            marginBottom: 10,
          }}>
          Category
        </Text>
        <FlatList
          data={category}
          keyExtractor={(item, index) => index}
          numColumns={3}
          contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}
          renderItem={e => {
            return (
              <TouchableOpacity
                style={{
                  padding: 3,
                  height: 80,
                  width: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  margin: 10,
                  borderRadius: 2,
                }}
                onPress={() =>
                  navigation.navigate('category', {category: e.item})
                }>
                <Text style={{color: 'black', fontWeight: 800}}>
                  {String(e.item).toUpperCase()}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </LinearGradient>
    </ImageBackground>
  );
}
