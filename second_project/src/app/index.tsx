import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity, ImageBackground,
} from "react-native";
import { useState } from "react";
import { Color } from "expo-router";

const image ={uri: 'https://tse2.mm.bing.net/th/id/OIP.TknPOwebOo9IHiU5-VrWVwHaE7?r=0&pid=Api&h=220&P=0'}
const Myapp = () => {
  const [gender, setGender] = useState('');
  const [village, setVillage] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [showdata, setShowdata] = useState(false);

 const handleSubmit = () =>{
  if (name !==''){
   setShowdata(true);
  }
 }

  return (
    <View style={Style.container}>
        <ImageBackground source={image} resizeMode="cover" style ={Style.background} imageStyle={Style.image}>
      <View style={Style.form}>
        <Text style={{fontSize:25, fontWeight:'bold', fontFamily:'sans-serif'}}>Test Form</Text>
        <View style={{ height: 2, backgroundColor: 'black', marginVertical: 15, width: '100%', position:'absolute', zIndex:1, elevation:1, marginTop: -220, }}/>
        <TextInput style={Style.input} value={name} onChangeText={setName}placeholder="Enter Full Name" />
        <TextInput style={Style.input} value={village} onChangeText={setVillage} placeholder="Enter Village" />
        <TextInput style={Style.input} value={age} onChangeText={setAge} placeholder="Enter Age" />
        <View style={Style.gender}>
          <Text style={Style.setgender}>Select Gender:</Text>
          <TouchableOpacity onPress={() => setGender("Male")}>
            <Text style={Style.setgender}>{gender === "Male" ? "☑" : "☐"}Male</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setGender("Female")}>
            <Text style={Style.setgender}>{gender === "Female" ? "☑" : "☐"}Female</Text>
          </TouchableOpacity>
        </View>
      <Button title="submit" onPress={handleSubmit}/>
      </View>
        </ImageBackground>
        {/* Agar showData 'true' hai, toh ye neeche wala box dikhega, warna 'null' (kuch nahi) */}
      {showdata ?(
      <View>
      <Text>Name:{name}</Text>  
      <Text>Village:{village}</Text>  
      <Text>Age:{age}</Text>  
      <Text>Age:{gender}</Text> 
      </View>
      ) :null}  
    </View>
  );
};



const Style = StyleSheet.create({
  setgender:{
    fontSize:20,
  },
  gender: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  container: {
    color: "black",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  input: {
    borderColor: "black",
    borderWidth: 2,
    width: 300,
    marginTop: 20,
    borderRadius: 12,
    color: "black",
  },
  form: {
    height: "auto",
    borderColor: "black",
    borderWidth: 2,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    padding:40,
    borderRadius:12,
  },
  image:{
    borderRadius: 12,
  },
  background:{}
});

export default Myapp;