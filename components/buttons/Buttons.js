import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

class Button extends Component {
  constructor (props) {
    super (props);
    // this.state = {
    //     disabledButton: false,
    // } 
  }

//   handleOnPress = () => {
//     this.props.navigation.navigate('Second')
//   }

  render() {    
    let { statusButt, secondPage, color } = this.props;
    
      return (
        <TouchableOpacity
            style = {[styles.button, { backgroundColor: color }]}
            disabled = {statusButt}
            onPress = {secondPage}
        >
            <Text>Войти</Text>
        </TouchableOpacity>
      );
    }
};

export default Button;