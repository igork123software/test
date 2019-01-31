import React, { Component } from "react";
import { CheckBox, View, Text, ScrollView, AsyncStorage } from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { styles } from './style'
import Input from '../../inputs/Input'
import Button from '../../buttons/Buttons'
import { addUser } from "../../../src/actions";
import { withNavigation } from 'react-navigation';

export class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
      saveUser: false,
      buttonStatus: true,
      email: '',
      password: '',
      borderColor: '#c0c3c5', // grey
      validEmail: false,
      validPassword: false,
      buttonColor: '#feebee' // pink
    }

    this.regexForEmail = /^[A-Za-z0-9]{8,}@[A-Za-z]{2,}.(com|ua|co|ru)$/;
    this.regexForPassword = /^[A-Za-z0-9]{6,}$/;
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: null,
      headerTitle: 'Войти',
      headerTitleContainerStyle: {
        justifyContent: 'center'
      },
      headerStyle: {
        backgroundColor: '#D3D3D3',
      },
    };
  };

  onInputFocus = () => {
    this.setState({
      borderColor: '#2cc3d0', // blue
    })
  };

  componentWillReceiveProps() {
    let { validEmail, validPassword } = this.state;

    if (validEmail && validPassword) {
      this.setState({
        buttonStatus: false
      });
    }
  };

  componentDidMount() {
    console.log('Login SCREEN ---------');   
  }

  checkValueEmail = (text) => {
    let emailText = "",
      validEmail1 = false,
      buttonStatus1 = true,
      buttonColor1 = '#feebee',
      { validPassword, validEmail } = this.state;

    if (this.regexForEmail.test(text)) {
      emailText = text;
      validEmail1 = true;
    }

    console.log(validEmail, validPassword)
    if (validEmail && validPassword) {
      buttonStatus1 = false;
      buttonColor1 = '#527096';
    }
    this.setState({
      email: emailText,
      validEmail: validEmail1,
      buttonStatus: buttonStatus1,
      buttonColor: buttonColor1
    });
  }

  checkValuePassword = (text) => {
    let passwordText = "",
      validPassword1 = false,
      buttonStatus1 = true,
      buttonColor1 = '#feebee',
      { validPassword, validEmail } = this.state;

    if (this.regexForPassword.test(text)) {
      passwordText = text;
      validPassword1 = true;
    }

    console.log(validEmail, validPassword)
    if (validEmail && validPassword) {
      buttonStatus1 = false;
      buttonColor1 = '#527096';
    }
    this.setState({
      password: passwordText,
      validPassword: validPassword1,
      buttonStatus: buttonStatus1,
      buttonColor: buttonColor1
    });
  }

  handleOnPress = async () => {
    let { addUser, navigation } = this.props;
    const { email, password, saveUser, buttonStatus } = this.state;

    try {
      const user = {
        email: email,
        password: password,
        saveUser: saveUser,
      };

      addUser(user);
      await AsyncStorage.setItem('userData', JSON.stringify(user));

      console.log(buttonStatus)

      if (!buttonStatus) {
        const user = {
          email: email,
          password: password,
          saveUser: saveUser,
        };
        addUser(user);
        console.log('user added');
        navigation.navigate('SecondScreen');
      }
    }
    catch {
      alert(error);
    }
  }

  checkedOnPress = () => {
    let { checked, saveUser } = this.state;

    this.setState({
      checked: !checked,
      saveUser: !saveUser
    })
  }

  render() {
    let { buttonStatus, buttonColor, checked } = this.state;
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.formContainer}>
          <Input
            // onFocus={this.onInputFocus}
            // onBlur={this.onInputBlur}
            typeInput={"Email"}
            func={this.checkValueEmail}
            secureTextEntry={false}
            funcFocus={this.onInputFocus}
            funcBlur={this.onInputBlurEmail}
          />
          <Input
            // onFocus={this.onInputFocus}
            // onBlur={this.onInputBlur}
            typeInput={"Password"}
            func={this.checkValuePassword}
            secureTextEntry={true}
            funcFocus={this.onInputFocus}
            funcBlur={this.onInputBlurPass}
          />
          <View style={styles.checkbox}>
            <CheckBox
              value={!checked}
              onValueChange={this.checkedOnPress}
            />
            <Text style={{ marginLeft: 10 }}>Запомнить меня</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Button statusButt={buttonStatus} secondPage={this.handleOnPress} color={buttonColor} />
          </View>
        </View>
      </ScrollView>
    );
  }
};

const mapStateToProps = state => ({
  userData: state.reducerUser
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addUser: addUser
}, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(LoginScreen));