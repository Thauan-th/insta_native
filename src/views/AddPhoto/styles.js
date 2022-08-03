import styled from 'styled-components/native'
const Container = styled.View(()=>({
  flex:1
})) 

const Title = styled.Text(()=>({
  fontSize:20,
  fontWeight:'bold',
}))

const ImageContainer = styled.View(({deviceWidth})=>({
  flex: 1,
  backgroundColor: '#DDD',
  justifyContent: 'center',
  alignItems: 'center',
  height: deviceWidth * 3/4,
  marginTop:10
}))

const StyledImage = styled.Image(({deviceWidth})=>({
  width:deviceWidth,
  height:deviceWidth*3/4,
  resizeMode:"center"
  
}))

const Buttom = styled.TouchableOpacity(()=>({
  marginTop:30,
  padding:10,
  backgroundColor:"#4285f4"
}))

const ButtomText = styled.Text(()=>({
  fontSize:20,
  color:"#FFF"
}))

const InputText = styled.TextInput(()=>({
  marginTop:20,
  width:"90%"
}))

export { Buttom , ButtomText , InputText , StyledImage , ImageContainer ,Title ,Container}