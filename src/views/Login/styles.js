import styled from "styled-components/native";

const Container = styled.View(()=>({
  flex:1,
  alignItems:"center",
  justifyContent:"center"
}))

const InputText = styled.TextInput(()=>({
  marginTop:20,
  width:'90%',
  height:40,
  borderWidth:1,
  borderColor:"#333",
  backgroundColor:"#EEE"
}))

const Button = styled.TouchableOpacity(()=>({
  marginTop:30,
  padding:10,
  backgroundColor:'#4286f4'
}))

const ButtomText = styled.Text(()=>({
  fontSize:20,
  color:'white'
}))

export {
  Container,
  InputText,
  ButtomText,
  Button
}