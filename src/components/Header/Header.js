import React from 'react';

import {Container,Row,ImageContainer,Title,Avatar,UserContainer,UserName} from './styles'
import Icon from '../../../assets/icon-insta.png'

import {useSelector} from 'react-redux'

export default function Header() {
  const email =  useSelector(state => state.user.email)
  const name = useSelector(state=>state.user.nickname)
  const userName =  name ?? "anonimo"
  const gravatar = email ? <Avatar options={{email,secure:true}} /> : <></>
  return (
    <Container style={{}}>
      <Row>
        <ImageContainer source={Icon} />
        <Title>Insta</Title>
      </Row>
      <UserContainer>
        <UserName>{userName}</UserName> 
        {gravatar}
      </UserContainer>
    </Container>
    );
}