import React from 'react';

import {Avatar,Email,ButtonText,Button,NickName,Container} from './styles'
import { useNavigation } from '@react-navigation/native';

import {useSelector} from 'react-redux'

export default ({
    logOut:userLogOut,
    nickname
  }) => {
    const email =  useSelector(state => state.user.email)
    const Navigate = useNavigation()

    const logOut = ()=>{
      // userLogOut()
      Navigate.navigate('Login')
    }
    const options = {
      email,
      secure:true
    }

  return (
    <Container>
      <Avatar options={options} />
      <NickName>{nickname || "A"}</NickName>
      <Email>{email}</Email>
      <Button onPress={logOut}>
        <ButtonText>Sair</ButtonText>
      </Button>
    </Container>
    );
}