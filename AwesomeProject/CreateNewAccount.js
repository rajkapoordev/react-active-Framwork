/**
 * Created by Devloper30 on 03/01/17.
 */

'use strict'

import React,{
    Component
} from 'react'

import{
    StyleSheet,
    Text,
    TextInput,
    Button,
    Alert,
    Image,
    ActivityIndicator,
    View,
    TouchableHighlight,
    Navigator
} from 'react-native';

var SearchPage = require('./SearchPage');

let styles = StyleSheet.create({
    description: {
        marginBottom: 20,
        fontSize: 35,
        textAlign: 'center',
        color: '#000'
    },
    container: {
        padding : 30,
        marginTop :10,
        alignItems : 'center'
    },
    buttonCreate: {
        backgroundColor: '#18B3AF',
        marginBottom: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 50,
        height: 65,
        width: 270,
        borderRadius: 35
    },
    buttonText:{
        fontSize: 20,
        color: 'white',
        alignSelf: 'center'
    },
    image:{
        width: 100,
        height: 100,
    },
   userInput:{
        backgroundColor: '#F5F5F6',
        textAlign: 'center',
        fontSize: 15,
        height: 50,
        marginTop: 15,
        color: '#A3A6AE',
        width: 270,
        alignSelf: 'center'
   }
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

class CusomTextBox extends Component{
    render(){
        return (
            <TextInput style={styles.userInput} placeholder={this.props.placeholderText}/>
        );
    }
}

class navigateNext extends Component{
    render(){
        return (
            <ReactNative.NavigatorIOS style={styles.container} initialRoute={{title: 'Search Page', component: SearchPage,  navigationBarHidden: true}}/>
        );
    }
}

class CreateNewAccount extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            fullName: '',
            emailAddress: '',
            password: ''
        };
    }

    handleCreateAccountBtn(event){
        {
            if(!validateEmail(this.state.emailAddress))
            {
                Alert.alert('Enter Valid Email');
            }
            else if(this.state.password.length <= 0)
            {
                Alert.alert('Enter Password');
            }
            else if(this.state.fullName.length <= 0)
            {
                Alert.alert('Enter your Full Name');
            }
        }
    }

    handleSignInBtn(event){

    }

    render(){
        var spinner = this.state.isLoading ? (<ActivityIndicator size='large'/>) : (<View/>);
        return (
            <View style={styles.container}>
                <Image source={require('./ios/Resources/hanger.png')} style={styles.image}/>
                <Text style={styles.description}>Create Account</Text>
                <Text style={{fontSize: 15, color:'#A3A6AE'}}>Please enter your details:</Text>
                <CusomTextBox placeholderText='Full Name'/>
                <CusomTextBox placeholderText='Email Address'/>
                <CusomTextBox placeholderText='Password'/>
                <TouchableHighlight style={styles.buttonCreate}>
                    <Text style={styles.buttonText} onPress={this.handleCreateAccountBtn.bind(this)}>Create account</Text>
                </TouchableHighlight>
                <View style={{flexDirection:'row',marginTop: 40, alignItems: 'center'}}>
                    <Text style={{fontSize: 15, color:'#A3A6AE'}}>Already a member?</Text>
                    {/*<Navigator renderScene={(route, navigator) => <Button onPress={() => {navigator.push(<ReactNative.NavigatorIOS style={styles.container} initialRoute={{title: 'Search Page', component: SearchPage,  navigationBarHidden: true}}/>*/}
                    {/*)}} title='Sign in' color='#18B3AF'/>} />*/}

                    <Button onPress={this.handleSignInBtn.bind(this)} title='Sign in' color='#18B3AF'/>
                </View>
            </View>
        );
    }
}

module.exports = CreateNewAccount;
