import React from 'react';

import {Avatar,Email,ButtonText,Button,NickName,Container} from './styles'
import { useNavigation } from '@react-navigation/native';

export default () => {
  const Navigate = useNavigation()
  const logOut = ()=>{
    Navigate.navigate('Login')
  }
  const options = {
    email:'saaaa@gmail.com',
    secure:true
  }

 return (
   <Container>
    <Avatar options={options} />
    <NickName>Email</NickName>
    <Email>Thauan@gmail.com</Email>
    <Button onPress={logOut}>
      <ButtonText>Sair</ButtonText>
    </Button>
   </Container>
  );
}