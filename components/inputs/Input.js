import React, { Component } from 'react';
import { View, TextInput, ScrollView } from 'react-native';
import { styles } from './style'

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      borderColor: '#62696e',
      result: null
    }
  }

  componentDidMount() {
    // let { typeInput, func, secureTextEntry, funcFocus, funcBlur } = this.props,
    //   result = this.renderInput(typeInput, func, secureTextEntry, funcFocus, funcBlur);

    // this.setState({ result });
  }


  onInputFocus = () => {
    console.log("onInputFocus -->");

    this.setState({
      borderColor: '#2cc3d0', // - blue 
    })
  };
  funcBlur = () => {
    console.log("funcBlur -->");
    
    this.setState({
      borderColor: '#62696e',
    })
  };

  // onInputFocus = () => {
  //   this.setState({
  //     borderColor: '#2f89fc',
  //   })
  //   alert(this.state.borderColor)
  // };

  // onInputBlur = () => {
  //   this.setState({
  //     borderColor: '#62696e'
  //   });
  //   // alert(this.state.borderColor)    
  // };


  // onInputFocus = () => {
  //     this.setState({
  //       borderColor: '#2cc3d0',
  //     }, console.log(this.state.password))
  //   };

  //   onInputBlur = () => {
  //     let { password } = this.state;

  //     console.log(password)
  //     if (reg.test(password)) {
  //       this.setState({
  //         password: password
  //       });
  //     } else {
  //       this.setState({
  //         password: ''
  //       });
  //     }

  //     this.setState({
  //       borderColor: '#c0c3c5'
  //     }); 
  //   };

  //   checkValueEmail = (text) => {
  //     const reg = this.regexForEmail;
  //   }

  //   checkValuePassword = (text) => {
  //     const reg = this.regexForPassword;
  //     // console.log('valid Passw', text);
  //     // console.log(reg.test(text))
  //     if (reg.test(text)) {
  //       alert ('valid')
  //     }
  //   }


  // renderInput (typeInput, func, secureTextEntry, funcFocus, funcBlur) {
  //   return (
  //     <ScrollView style={ styles.inputMargin }>
  //       <TextInput
  //         onFocus={funcFocus}
  //         onBlur={funcBlur}
  //         style={[ styles.input, { borderColor: this.state.borderColor } ]}
  //         placeholder= {typeInput}

  //         onChangeText={func}
  //         secureTextEntry={secureTextEntry}
  //       />
  //     </ScrollView>
  //   )    
  // }
  // componentWillReceiveProps(nextProps){
  //   alert(JSON.stringify(nextProps))
  //   let { type } = nextProps,
  //         result = this.renderInputs( type );
  //   // result = ( type ? this.renderInputPassword() : this.renderInputEmail());
  //   this.setState({result});
  // }

  blurOnSubmit = () =>{
    console.log("blurOnSubmit -->");
  }
  render() {
    let { typeInput, func, secureTextEntry } = this.props,
        { borderColor } = this.state;
    // let { result } = this.state;    
    //   return ( result );
    return (
      <TextInput
        onFocus={this.onInputFocus}
        onBlur={this.funcBlur}
        style={[styles.input, { borderColor: borderColor }]}
        placeholder={typeInput}
        onChangeText={func}
        secureTextEntry={secureTextEntry}
      />
    );
  }

};

export default Input;