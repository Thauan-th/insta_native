import React from 'react';

import { FlatList, View } from 'react-native';

import Post from '../../components/Posts'
import Header from '../../components/Header'

export default ( ) => {
  const [posts,setPosts] = React.useState([
    {
      id:Math.random(),
      nickname:"Fulano",
      email:"thauanandre09@gmail.com",
      image: require('../../../assets/fence.jpg'),
      comments:[
        {
          nickname:"John",
          comment:"Nice"
        }
      ]
    },
    {
      id:Math.random(),
      nickname:"Fulano",
      email:"thauanandre09@gmail.com",
      image: require('../../../assets/fence.jpg'),
      comments:[
        {
          nickname:"John",
          comment:"Nice"
        }
      ]
    },
    {
      id:Math.random(),
      nickname:"Fulano",
      email:"thauanandre09@gmail.com",
      image: require('../../../assets/fence.jpg'),
      comments:[
        {
          nickname:"John",
          comment:"Nice"
        }
      ]
    }
  ])
  
  return (
    <View>
      <Header/>
      <FlatList
        data={posts}
        keyExtractor={item=>`${item.id}`}
        renderItem={({item})=> <Post key={item.id} {...item} />}
      />
    </View>
  );
}