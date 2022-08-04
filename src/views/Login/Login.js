import React from 'react';
import { Container} from './styles'

import { useNavigation } from '@react-navigation/native';

import * as Styled from './styles'

export default ()=>{

  const [email,setEmail] = React.useState()
  const [password,setPassword] =React.useState()

  const navigate = useNavigation()

  const login = ()=>{
    navigate.navigate('Login')
  }
  const register = ()=>{
    navigate.navigate('Register')
  }

 return (
   <Styled.Container>
    <Styled.InputText
      placeholder='email'
      keyboardType={'email-address'}
      value={email}
      onChangeText={t=>setEmail(t)}

    />
    <Styled.InputText
      placeholder='password'
      secureTextEntry={true}
      value={password}
      onChangeText={p=>setPassword(p)}
    />
    <Styled.Button onPress={login}>
      <Styled.ButtomText>Login</Styled.ButtomText>
    </Styled.Button>
    <Styled.Button onPress={register}>
      <Styled.ButtomText>Criar uma conta...</Styled.ButtomText>
    </Styled.Button>
   </Styled.Container>
  );
}