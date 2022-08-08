import React, { useState } from 'react';

import {useDispatch} from 'react-redux'
import {login} from '../../store/actions/user'

import { useNavigation } from '@react-navigation/native';

import * as Styled from './styles'

export default ()=>{
  const dispatch = useDispatch()
  const [inputs,setInputs] = useState({
    password:"",
    email:""
  })

  const navigate = useNavigation()

  const handleLogin = ()=>{
    const toDispatch = {
      user:{
        email:inputs.email,
        password:inputs.password
      }
    }
    dispatch(login(toDispatch.user))
    navigate.navigate('Profile')
  }

  const register = ()=>{
    navigate.navigate('Register')
  }

 return (
   <Styled.Container>
    <Styled.InputText
      placeholder='email'
      keyboardType={'email-address'}
      value={inputs.email}
      onChangeText={t=>setInputs(prev=>({...prev,email:t}))}

    />
    <Styled.InputText
      placeholder='password'
      secureTextEntry={true}
      value={inputs.password}
      onChangeText={p=>setInputs(prev=>({...prev,password:p}))}
    />
    <Styled.Button onPress={handleLogin}>
      <Styled.ButtomText>Login</Styled.ButtomText>
    </Styled.Button>
    <Styled.Button onPress={register}>
      <Styled.ButtomText>Criar uma conta...</Styled.ButtomText>
    </Styled.Button>
   </Styled.Container>
  );
}