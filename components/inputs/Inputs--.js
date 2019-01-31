import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './style'

class Inputs extends Component {
  constructor (props) {
    super (props);
    this.state = {
      borderColor: 'grey',
      email: '',
      password: '',
      result: null,
    } 
  }

  // onInputFocus = () => {
  //   this.setState({
  //     borderColor: 'blue',
  //   })
  //   //alert(this.state.email)
  // };

  // onInputBlur = () => {
  //   this.setState({
  //     borderColor: 'grey'
  //   });    
  // };
  

  // checkValueEmail = (email) => {
  //   this.setState({
  //     email: email,
  //   })
  // }

  // checkValuePassword = (password) => {
  //   let lastItem = password[password.length - 1];
  //   if (lastItem.trim() === null || lastItem.trim() === '' ) {
  //     // this.setState({
  //     //   borderColor: 'red',
  //     // })
  //   }
  //   // alert( lastItem.match(/[A-Fa-z0-9]/g) );
  // }

  // renderInput( typeInput = 'email' ) {
  //   return (
  //     <View style={ styles.inputMargin }>
  //       <TextInput
  //         onBlur={this.onInputBlur}
  //         onFocus={this.onInputFocus}
  //         style={[ styles.input, { borderColor: this.state.borderColor } ]}
  //         placeholder= {typeInput}
  //         onChangeText={this.checkValuePassword}x
  //         secureTextEntry={true}
  //       />
  //     </View>
  //   )
  // };

  renderInputPassword() {
    return (
      <View style={ styles.inputMargin }>
        <TextInput
          onBlur = {this.onInputBlur}
          onFocus = {this.onInputFocus}
          style = {[ styles.input, { borderColor: this.state.borderColor } ]}
          placeholder = "Password"
          onChangeText = {this.checkValuePassword}
          secureTextEntry={true}
        />
      </View>
    )
  };

  renderInputEmail() {
    return (
      <View style={ styles.inputMargin }>
        <TextInput
          onBlur = {this.onInputBlur}
          onFocus = {this.onInputFocus}
          style = {[ styles.input, { borderColor: this.state.borderColor } ]}
          placeholder = "Email"
          onChangeText={this.checkValueEmail}
        />
      </View>
    )
  };

  renderInputs = (type) =>{
    let result = null;
      if( type && typeof type == "string" ){
        // result = ( type ? this.renderInputPassword() : this.renderInputEmail());
        result = renderInput()
      }
    return result;
  }
componentDidMount(){
  let { type } = this.props,
  result = this.renderInputs( type );
  // result = ( type ? this.renderInputPassword() : this.renderInputEmail());
  this.setState({result});
}
  componentWillReceiveProps(nextProps){
    alert(JSON.stringify(nextProps))
    let { type } = nextProps,
          result = this.renderInputs( type );
    // result = ( type ? this.renderInputPassword() : this.renderInputEmail());
    this.setState({result});
  }
  render() {
    let { result } = this.state;
    return (
      result
        // this.props.type === 'Password'
        // ?
        // this.renderInputPassword()
        // :
        // this.renderInputEmail()
      );
    }
};

export default Inputs;