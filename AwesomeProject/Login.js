/**
 * Created by LaNet on 1/3/17.
 */

'use strict';

import React, {
    Component
} from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    Button,
    Alert,
    Navigator,
    TouchableHighlight,
} from 'react-native';
var ScrollView = require('ScrollView')
const onButtonPress = () => {
    Alert.alert('Button has been pressed!');
};

class Login extends  Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            isLoading: false,
            emailAddress:'',
            password:''
        };
    }
    render()
    {
        return this.renderLoginView();
    }

    renderLoginView()
    {
        return(
            <ScrollView
                ref='scroll'
                style={styles.container}
                keyboardDismissMode={'on-drag'}
            >
                <View style={{alignSelf: 'stretch'}}>
                    <Image source={require('./ios/Resources/hanger.png')} style={styles.image}/>
                    <Text style={styles.welcome}>Welcome back!</Text>
                    <Text style={styles.detail}>Please enter your details:</Text>
                    <TextInput
                        style={styles.emailText}
                        placeholder="Email Address"
                        onChangeText={(text) => this.setState({emailAddress:text})}
                       // onFocus={this.textInputFocused.bind(this)}
                    />
                    <TextInput
                        style={styles.emailText}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({password:text})}

                    />
                    <TouchableHighlight
                        style={styles.signinButton}
                        onPress={this.onLoginPressed.bind(this)}
                        underlayColor={'#18B3AF'}
                        >
                        <Text style={styles.signinText} onPress={this.onLoginPressed.bind(this)}>Sign In</Text>
                    </TouchableHighlight>
                    <View style={styles.signupView}>
                        <Text style={{fontSize: 15, color:'#A3A6AE'}}>Don’t have an account?</Text>
                        <Button
                            onPress={this.onSignupPressed.bind(this)}
                            title='Sign Up'
                            color='#18B3AF'
                            accessibilityLabel="Signup"
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
    onLoginPressed(event)
    {
        if(!validateEmail(this.state.emailAddress))
        {
            Alert.alert('Enter Valid Email');
        }
        else if(this.state.password.length <= 0)
        {
            Alert.alert('Enter Password');
        }
        else
        {
            Alert.alert('Success');
        }
    }
    onSignupPressed(event)
    {
            Alert.alert('Go to Signup');
    }
    textInputFocused ()
    {
        this.refs.scroll.scrollToPosition(0, 0, true)
    }

}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
var styles = StyleSheet.create({
    container: {
        marginTop: 65,
        flex:1,
        // borderWidth: 1,
        // borderColor: 'red'
    },
    image:{
        width: 100,
        height: 100,
        marginTop: 15,
        alignSelf: 'center',

        // borderWidth: 1,
        // borderColor: 'red'
    },
    welcome:{
        fontSize: 32,
        marginTop: 15,
        textAlign: 'center',
        color: 'black',
        alignSelf: 'center',
        // borderWidth: 1,
        // borderColor: 'red'
    },
    detail:{
        fontSize: 16,
        marginTop: 45,
        textAlign: 'center',
        color: 'grey',
        alignSelf: 'center',
        // borderWidth: 1,
        // borderColor: 'red'
    },
    emailText:{
        backgroundColor:'#F5F5F6',
        textAlign: 'center',
        // borderWidth: 1,
        // borderColor: 'red',
        height: 50,
        marginLeft:40,
        marginRight:40,
        marginTop:20
    },
    signinButton:{
        backgroundColor:'#18B3AF',
        flex:1,
        // borderWidth: 1,
        // borderColor: 'red',
        alignSelf: 'stretch',
        justifyContent: 'center',
        marginTop: 40,
        marginLeft:40,
        marginRight:40,
        height: 68,
        borderRadius:34
    },
    signinText:{
        fontSize: 22,
        color: 'white',
        alignSelf: 'center',
        // borderWidth: 1,
        // borderColor: 'red'
    },
    signupView:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        alignSelf: 'center'
    },

});

module.exports = Login;