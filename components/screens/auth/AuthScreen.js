import React, { Component } from 'react';
import { View, Text, AsyncStorage } from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUser } from "../../../src/actions";
import { withNavigation } from 'react-navigation';

export class AuthScreen extends Component {
    static navigationOptions = {
        header: null,
    };

    displayData = async () => {
        let { navigation } = this.props;
        try {
            console.log('Auth screen')
            let user     = await AsyncStorage.getItem('userData'),
            seveUserObj = this.fromJSON(user);
                saveUser = seveUserObj.saveUser;
            console.log(seveUserObj);

            if (saveUser) {
                console.log('SECOND SCREEN AUTH');
                navigation.navigate('SecondScreen');
            } else {
                console.log('LOGIN SCREEN AUTH');
                navigation.navigate('LoginScreen');
            }
        }
        catch {
            alert(error);
        }
    }

    fromJSON = ( json )=> {
        console.log(json)
        let result = {saveUser: false};
            if (json) {
                result = JSON.parse(json);
            }
        return result;
    }

    componentDidMount() {
        // console.log('AUTH SCREEN')
        this.displayData();
    }

    render() {
        return (  
            <View/>
        )
    }
}

// export default AuthScreen;

const mapStateToProps = state => ({
    userData: state.reducerUser
});

const mapDispatchToProps = dispatch => bindActionCreators({
    addUser: addUser
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);
// export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(AuthScreen));