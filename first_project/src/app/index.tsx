import { useState } from 'react';
import {Button,Text, TextInput, View, StyleSheet} from 'react-native';

export default function Home() {
  const [userName, setUserName] = useState('');
  const [randomerepoName, setRandomeRepoName] = useState('');

  const fetchRepo = () => {
   console.log(userName);
   fetch(`https://api.github.com/users/${userName}/repos`)
   .then(Response => Response.json())
   .then(data => {
    if (data && data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length);
          setRandomeRepoName(data[randomIndex].name);
        } else {
          setRandomeRepoName('No public repos found!');
        }
   })
   .catch(error => {
    console.log("Error aaya:", error);
        setRandomeRepoName('User not found!');
   })
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TextInput
        style={{
          width: 200,
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 12,
        }}
        placeholder="Enter github username"
        value={userName}
        onChangeText={setUserName}
      />
      <Button 
      title="Fetch Repo"
      onPress={fetchRepo}
      ></Button>
      <Text style = {style.container}
      >Randome Repo:{randomerepoName}</Text>
    </View>
  );
}

const style = StyleSheet.create({
    container: {
      backgroundColor: 'yellow',
      marginTop: 20,
      padding: 10,
      borderRadius: 5
    }
})
