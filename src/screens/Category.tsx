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
import axios from 'axios';
export default function Category({route}) {
  const [data, setData] = useState([{"category": "poem", "content": `welcome to shyara \n tremendous collection of poems and shayaris `, "title": "mohabat ki baater", "writer": "prachi sharma"}]);
  const [page, setPage] = useState(0);
  const [hasMore,setHasMore]=useState(true)
  const fetchMore = async () => {
    const options = {
      method: 'GET',
      url: 'https://poetry-backend.onrender.com/poems',
      params: {category: route.params.category, page:page+1}
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
      setPage(page+1)
      setHasMore(response.data.hasMore)
      setData(state=>[...state,...response.data.poems])
      console.log(data)
    }).catch(function (error) {
      console.error(error);
    });
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
            onEndReached={hasMore && fetchMore}
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
                      zIndex:10,
                      opacity:10,
                      fontSize: 16,
                      paddingHorizontal:10,
                    }}>
                    {item.item.content}
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
