import React from 'react';

import {Container,InputText,Buttom,ButtomText} from './styles'


export default () => {
  const [email,setEmail] = React.useState('')
  const [name,setName] = React.useState('')
  const [password,setPassword] = React.useState('')
 return (
    <Container>
      <InputText
       onChangeText={p=>setName(p)}
       autofocus={true}
       placeholder='name'
       value={name}
      />
      <InputText
       onChangeText={p=>setEmail(p)}
       placeholder='email'
       keyboardType='email-address'
       value={email}
      />
      <InputText 
        onChangeText={p=>setPassword(p)}
        secureTextEntry={true}
        placeholder='senha'
        value={password}
      />
      <Buttom onPress={()=>{}}>
        <ButtomText>Salvar</ButtomText>
      </Buttom>
    </Container>
  );
}