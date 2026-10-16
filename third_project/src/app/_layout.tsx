
import { Color, Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


function RootLayout(){
 return(
  <Tabs screenOptions={{tabBarActiveTintColor: '#e67e22', headerShown: true,}}>
    <Tabs.Screen name='index'
     options={{ 
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} /> 
        }}/>

    <Tabs.Screen name='profile'
     options={{title:'Profile', tabBarIcon:({color}) => <Ionicons name="person" size={24} color={color}/>}}/>  

    <Tabs.Screen name='save'
    options={{title:'Save', tabBarIcon:({color}) => <Ionicons name='save' size={24} color={color} />}} />  
  </Tabs>
 );
}

export default RootLayout;