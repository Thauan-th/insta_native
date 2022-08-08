import { Gravatar } from "react-native-gravatar";
import { css } from "styled-components";
import styled from "styled-components/native";


const applyStyleProp = css`
  ${({ style }) => ({ ...style })};
`

export const Container = styled.View`
  ${applyStyleProp};
  margin-top:15;
  padding: 10px;
  border-bottom-width:1px;
  border-color: '#BBB';
  display:flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Row = styled.View`
  ${applyStyleProp};
  flex-direction: row;
  align-items: center;
`

export const ImageContainer = styled.Image(()=>({
  height: '30px',
  width: '30px',
  resizeMode:'contain'
}))

export const Title = styled.Text`
  color:#000;
  height:30px;
  font-size:20px;
`

export const Avatar = styled(Gravatar)`
  width:30;
  height:30;
  margin-left:10;
`

export const UserName = styled.Text`
  font-size:10;
  color:#888;
`

export const UserContainer  = styled.View`
  flex-direction:row;
  align-items:center;
`
