import { StatusBar } from 'expo-status-bar';
import { SearchBar, List, FlatList } from 'react-native-elements';
import * as React from 'react';
import { TextInput, Button, View } from 'react-native';
import styles from './styles';


 function SearchBar() {
     <View>
       <View style={styles.searchBar}>
         <View style={styles.searchText}>
        <TextInput 
        placeholder="Pesquise por alimento"
        style={styles.searchText}/>
        </View>
       
        </View>
     
     </View> 
};export default SearchBar;