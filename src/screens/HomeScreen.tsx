import {
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
export default function HomeScreen() {
  const category = set( [
    'shayari',
    'poetry',
    'poem',
    'kavita',
    'gazal',
    'book',
    'rap-song',
    'bhajan',
    'vyang',
  ]);
  return (
    <ImageBackground
      source={{
        uri: 'https://cdn.pixabay.com/photo/2015/05/12/16/01/rose-764267_640.jpg',
      }}
      style={{flex: 1, opacity: 0.5, backgroundColor: 'red'}}>
      <LinearGradient colors={['gray', '#FF9999']} style={{flex: 1}}>
        <View style={{height: 300, padding: 5}}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: 800,zIndex:1}}>
            Poetry Of The Day
          </Text>
          <View
            style={{
              height: 30,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontWeight: 600,
                fontSize: 15,
              }}>
              {
                'mohabat ke pakheru is kadar udh gye      \n ki jakham jinda raha bs bande badal gye .'
              }
            </Text>
          </View>
        </View>
        <Text
          style={{color: 'black', fontSize: 20, fontWeight: 800, padding: 10}}>
          Category
        </Text>
        <FlatList
          data={category}
          keyExtractor={item => item.item}
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
                  opacity: 0.8,
                }}>
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
