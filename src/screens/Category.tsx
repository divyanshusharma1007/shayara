import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Category({route}) {
  const [data, setData] = useState(["hello world"]);
  const [page, setPage] = useState(0);
  const fetchMore = async () => {
    const resp = await fetch(
      ` https://015e-2409-4081-9b12-4e24-8d34-d75d-16c5-f555.ngrok-free.app/poetry?category=${
        route.params.category
      }&_limit=1&_page=${page + 1}`,
    )
      .then(d => d.json())
      .then(d => {
        setData(state => [...state,...d]);

      }).catch(e=>console.log(e,'this is errro'));
    setPage(state => state + 1);
  };
  return (
    <ImageBackground
      source={{
        uri: 'https://cdn.pixabay.com/photo/2015/05/12/16/01/rose-764267_640.jpg',
      }}
      style={{flex: 1, zIndex: 1, opacity: 0.5}}>
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
          {route.params.category.slice(0, 1).toUpperCase() +
            route.params.category.slice(1)}
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
                      color: 'white',
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
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={require('../assets/ShayarLogo.png')}
                      style={{height: 25, width: 70}}
                    />
                    <Text style={{fontSize: 10, color: 'white'}}>
                      Shyara.in
                    </Text>
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
