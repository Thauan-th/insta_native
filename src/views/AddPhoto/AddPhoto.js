import React, { useState, useEffect } from 'react';
import { Alert , Dimensions } from 'react-native';
import ImagePicker from 'react-native-image-picker';
// import TypeCamera from '../components/Camera'; 
import { ScrollView } from 'react-native-gesture-handler';

import  { Buttom , ButtomText , InputText , StyledImage , ImageContainer ,Title ,Container} from './styles'

export default ()  => {
  const [photo, setPhoto] = useState(false)
  // const [openCamera, setOpenCamera] = useState(false)
  const [comment, setComment] = useState("")

  const deviceWidth = Dimensions.get('window').width
  
  const pickImage = async () => {
    // if ( !props.name ){
    //   Alert.alert('Falha',noUser)
    //   return 
    // }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      setPhoto(result.uri);
    }
  };
  const save = ()=>{
    Alert.alert("Add",comment)
  }
  return (
    <ScrollView>
      <Container>
        <Title>Compartilhe uma imagem</Title>
        <ImageContainer deviceWidth={deviceWidth}>
          <StyledImage source={photo} deviceWidth={deviceWidth}/>
          <Buttom onPress={pickImage}>
            <ButtomText>Escolha a foto </ButtomText>
          </Buttom>
          <InputText
            placeholder='...'
            value={comment}
            onChangeText={text=>setComment(text)}
          />
          <Buttom onPress={save}>
            <ButtomText>Salvar</ButtomText>
          </Buttom>
        </ImageContainer>
      </Container>
    </ScrollView>
  )

}