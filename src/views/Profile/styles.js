import styled from "styled-components/native";

import { Gravatar } from "react-native-gravatar";

const Container = styled.View`
  flex:1;
  align-items:center;
`

const NickName = styled.Text`
  margin-top:30;
  font-size:30;
  font-weight:bold;
`

const Avatar = styled(Gravatar)`
  width:150;
  height:150;
  border-radius:75;
  margin-top:100;
`

const Email = styled.Text`
  margin-top:30;
  font-size:30;
  font-weight:bold;
`

const Button = styled.TouchableOpacity`
  margin-top:30;
  padding:10px;
  background-color:#4286f4;

`

const ButtonText = styled.Text`
  font-size:20;
  color:white;
`

export {NickName,Container,Avatar,Email,Button,ButtonText}