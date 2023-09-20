import {View, Text, SafeAreaView, FlatList, Image,ImageBackground} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Category() {
  
  const [data, setData] = useState(
    Array.from({length: 10}, (value, index) => index + 1),
  );

  const fetchMore = () => {
    setData(state => [
      ...state,
      ...Array.from({length: 10}, (value, index) => state.length + index),
    ]);
  };
  return (
    <ImageBackground
    source={{
      uri: 'https://cdn.pixabay.com/photo/2015/05/12/16/01/rose-764267_640.jpg',
    }}
    style={{flex: 1,zIndex:1,opacity:0.5}}>
    <View>
      <Text
        style={{
          color: 'black',
          fontWeight: 800,
          fontSize: 25,
          position: 'absolute',
          top: 10,
          left: 10,
        }}>
        Shyari
      </Text>
      <SafeAreaView style={{margin: 10, marginTop: 50}}>
        <FlatList
          data={data}
          onEndReached={fetchMore}
          renderItem={item => (
            <View
              style={{
                flex: 1,
                backgroundColor: 'red',
                margin: 4,
              }}>
              <View
                style={{
                  height: 640,
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'scroll',
                }}>
                <Text
                  style={{
                    color: 'black',
                    textAlign: 'center',
                    fontWeight: 800,
                    fontSize: 16,
                  }}>
                  {
                    'mohabat yu he nahi krte ham ,\n bss mathe par kafan bandhna padhta hai'
                  }
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginHorizontal: 15,
                  marginVertical: 20,
                  alignItems:'center'
                }}>
                <View
                style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                  <Image
                    source={require('../assets/ShayarLogo.png')}
                    style={{height: 25, width: 70}}
                  />
                  <Text style={{fontSize:10,color:"white"}}>Shyara.in</Text>
                </View>
                <Icon name="download" size={25} color="white" />
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    </View>
    </ImageBackground>
  );
}
