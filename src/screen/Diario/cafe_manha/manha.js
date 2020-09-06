import { StatusBar } from 'expo-status-bar';
//import { SearchBar, List, FlatList } from 'react-native-elements';
import * as React from 'react';
import { Text, View, FlatList  } from 'react-native';
import styles from './styles';

const dados = [
  {name: 'Banana'},
  {name: 'Maça', cal: 110},
  {name: 'Laranja', cal: 240},
  {name: 'Melancia', cal: 180}
]
export default function Manha() {
  return(
  
  <View style={styles.container}>
      <FlatList
        data={dados}
        renderItem = {(obj) => {
          return (
          <Text style = {styles.container}>
            {obj.item.name}</Text>
          )
           }}
          />
  </View>
  );
}

