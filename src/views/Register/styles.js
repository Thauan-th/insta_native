import styled from 'styled-components/native'

const Container = styled.View(()=>({
  flex:1,
  alignItems:"center",
  justifyContent:"center"
}))

const InputText = styled.TextInput(()=>({
  marginTop:20,
  width:'90%',
  backgroundColor:"#EEE",
  height:40,
  borderWidth:1,
  borderColor:"#333",
  paddingLeft:'15px'
}))

const Buttom = styled.TouchableOpacity(()=>({
  marginTop:30,
  padding:10,
  backgroundColor:"#4286f4"
}))
const ButtomText = styled.Text(()=>({
   fontSize:20,
   color:"#FFF"
}))

export {Container,InputText,Buttom,ButtomText}