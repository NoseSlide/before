import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({  
    container:{
      marginLeft: 10,
      marginTop: 10,
      fontSize: 18,
    },  
    opcao: {
      justifyContent: 'center',
      marginBottom: 30,
      width: 300,
      height: 50,
      borderRadius: 10,
      backgroundColor: '#2570f9',
    },
    searchBar: {
      justifyContent: 'center',
      marginBottom: 30,
      height: 50,
      backgroundColor: '#D3D3D3',
    },
    searchInput: { 
      backgroundColor: 'white',
      marginLeft: 5,
      width: 320,
      height: 35,
      borderRadius: 10
    },
    searchText:{
      fontSize: 18,
      marginLeft: 10,
      marginTop: 7,
      
    },
    searchCancel: {
      marginLeft: 0,
    },
  });
  
  export default styles;