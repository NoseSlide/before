import'react-native-gesture-handler';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Diario from './src/screen/Diario/diario';
import Resumo from './src/screen/Resumo/resumo';


const Tab = createBottomTabNavigator();


export default function App() {
  return (
    
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Diário" component={Diario}/>
        <Tab.Screen name="Resumo" component={Resumo}/>
      </Tab.Navigator>
    </NavigationContainer>

  );
 }
