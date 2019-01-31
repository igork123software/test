import React, { Component } from "react";
import { View, Text, Button, AsyncStorage, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUser } from "../../../src/actions";
import { withNavigation } from 'react-navigation';

export class SecondScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: ''
    }
  }
    static navigationOptions = {
      header: null,
    };

    displayEmail = async () => {
      try {
        let user      = await AsyncStorage.getItem('userData'),
        saveUserObj   = this.fromJSON(user),
            userEmail = saveUserObj.email;
        console.log(userEmail);
        this.setState({email: userEmail});


          // let user = await AsyncStorage.getItem('userData');          
          // let userEmail = JSON.parse(user).email;
          // // console.log(userEmail)
          // this.setState({email: userEmail});
      }
      catch {
          alert(error)
      }
    }

    exitButton = async () => {
      let { navigation } = this.props;

      navigation.navigate('LoginScreen');
      await AsyncStorage.removeItem('userData')
      console.log('second --->>> login');
    }

    fromJSON = ( json )=> {
      console.log(json)
      let result = {saveUser: false};
          if(json){
              result = JSON.parse(json);
          }
      return result;
  }

    componentDidMount() {
      console.log('Second SCREEN ---------2222222')
      this.displayEmail();
    }

    render() {
      // const {navigate} = this.props.navigation;
      // let { userData } = this.props;
      let { email } = this.state;
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* <Text>Hello {userData.userData.email}</Text> */}
            <Text >Hello {email} </Text>          
            <Button
              title="Back"
              onPress={this.exitButton}
            />
          </View>
        );
      }
};

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: "center",
//       justifyContent: "center"
//     }
//   })

const mapStateToProps = state => ({
  userData: state.reducerUser
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addUser: addUser
}, dispatch);

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(SecondScreen));

// export default SecondScreen;