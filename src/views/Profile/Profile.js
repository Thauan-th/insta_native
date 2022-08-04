import React from 'react';

import {Avatar,Email,ButtonText,Button,NickName,Container} from './styles'

export default () => {

  const logOut = ()=>{
    console.log('ok')
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