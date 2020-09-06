import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      marginTop: -80,
      marginBottom: 80,
    },
    opcao: {
      justifyContent: 'center',
      marginBottom: 30,
      width: 300,
      height: 50,
      borderRadius: 10,
      backgroundColor: '#2570f9',
    },
    txtOpc: {
      marginTop: 100,
      textAlign: 'center', 
      fontSize: 18,
      color: 'black',
    },
    searchBar: {
      justifyContent: 'center',
      marginBottom: 30,
      height: 50,
      backgroundColor: '#666',
    },
    searchText: {
      fontSize: 16,
      borderColor: 'white', 
      backgroundColor: 'white',
      marginLeft: 5,
      width: 320,
      height: 30,
      borderRadius: 5,
      

    },
    searchCancel:{
      textAlign: 'left',
    },
  });
  
  export default styles;