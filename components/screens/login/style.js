import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      // backgroundColor: "#ADD8E6",
      // paddingTop: 50,   
    },
    formContainer: {
      width: 250,
      // flex: 1,
      // backgroundColor: "white",
      
    },
    // header: {
    //   backgroundColor: 'lightgrey',
    //   paddingTop: 10,
    //   paddingRight: 30,
    //   paddingBottom: 10,
    //   paddingLeft: 30,
    // },
    // headerText: {
    //   fontSize: 16,
    //   color: 'black',
    //   textAlign: 'center'
    // },
    input: {
      height: 40,
      borderColor: 'grey',
      borderWidth: 1
    },
    inputMargin: {
      marginTop: 25,
    },
    checkbox: {
      marginTop: 25,
      flexDirection: 'row',
      alignItems: "center",
    },
    button: {
      marginTop: 25,
      alignItems: 'center',
      backgroundColor: '#ACD7E3',
      padding: 10,
      borderRadius: 10,
      width: 250
    }
  })