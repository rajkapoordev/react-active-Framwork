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
var FirstVC = require('./firstVC');
var shopPageVC = require('./shopPageVC');
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
        var _scrollView: ScrollView;

        return(
        <ScrollView
                ref={(scrollVw) => { _scrollView = scrollVw; }}
                keyboardShouldPersistTaps = {true}
                style={styles.container}>
                <View style={{alignSelf: 'stretch',marginTop:65}}>
                    <Image source={require('./ios/Resources/hanger.png')} style={styles.image}/>
                    <Text style={styles.welcome}>Welcome back!</Text>
                    <Text style={styles.detail}>Please enter your details:</Text>
                    <TextInput
                        style={styles.emailText}
                        placeholder="Email Address"
                        returnKeyType = {"next"}
                        ref="txtEmail"
                        autoCorrect = {false}
                        onChangeText={(text) => this.setState({emailAddress:text})}
                        onSubmitEditing={(event) => { this.refs.txtPassword.focus(); }}
                        onFocus={() => {_scrollView.scrollTo({y: 30}); }}
                    />
                    <TextInput
                        style={styles.passwordText}
                        placeholder="Password"
                        ref="txtPassword"
                        autoCorrect = {false}
                        returnKeyType = {"done"}
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({password:text})}
                        onFocus={() => { _scrollView.scrollTo({y: 30});}}
                        onSubmitEditing={()=>{_scrollView.scrollTo({y:-21})}}
                    />
                    <TouchableHighlight
                        style={styles.signinButton}
                        underlayColor={'#18B3AF'}
                        onPress={this.onLoginPressed.bind(this)}
                    >
                        <Text style={styles.signinText} onPress={this.onLoginPressed.bind(this)}>Sign In</Text>
                    </TouchableHighlight>
                    <View style={styles.signupView}>
                        <Text style={{fontSize: 15, color:'#A3A6AE'}}>Don’t have an account?</Text>
                        <Button
                            title='Sign Up'
                            color='#18B3AF'
                            accessibilityLabel="Signup"
                            onPress={this.onSignupPressed.bind(this)}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }

    //Actions
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
            this.props.navigator.push({
                title: 'shopPageVC',
                component:shopPageVC,
                navigationBarHidden:true
            })
        }
    }
    onSignupPressed(event)
    {
        //Push to Signup page
        this.props.navigator.push({
            title: 'Signup',
            component:FirstVC,
            navigationBarHidden:true
        })
    }

    //other way to access referencee
    /*
    textInputFocused(event)
    {
        this.refs.scrollView.scrollTo({x: 0, y: 30, animated: true})
    }
    resetScrolling(event)
    {
        this.refs.scrollView.scrollTo({x: 0, y: -30, animated: true})
    }
    */
}

//methods
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

//Stylesheet
var styles = StyleSheet.create({
    container: {
        marginTop:15,
        flex:1
        // borderWidth: 1,
        // borderColor: 'red'
    },
    image:{
        width: 100,
        height: 100,
        marginTop: 15,
        alignSelf: 'center'
    },
    welcome:{
        fontSize: 32,
        marginTop: 15,
        textAlign: 'center',
        color: 'black',
        alignSelf: 'center'
    },
    detail:{
        fontSize: 16,
        marginTop: 45,
        textAlign: 'center',
        color: 'grey',
        alignSelf: 'center'
    },
    emailText:{
        backgroundColor:'#F5F5F6',
        textAlign: 'center',
        height: 50,
        marginLeft:40,
        marginRight:40,
        marginTop:20
    },
    passwordText:{
        backgroundColor:'#F5F5F6',
        textAlign: 'center',
        height: 50,
        marginLeft:40,
        marginRight:40,
        marginTop:20
    },
    signinButton:{
        backgroundColor:'#18B3AF',
        flex:1,
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
        alignSelf: 'center'
    },
    signupView:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        alignSelf: 'center'
    },
});

module.exports = Login;