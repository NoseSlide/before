import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View} from 'react-native';
import styles from './styles';


export default function Resumo() {
  return (
    
   <View style={styles.container}>
      <StatusBar style="auto" />
      
      <Text>Seu resumo diário será mostrado aqui</Text>
    </View>
  );
}

