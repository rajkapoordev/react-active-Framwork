/**
 * Created by LaNet on 1/2/17.
 */
'use strict';

import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    Alert,
    TouchableHighlight
} from 'react-native';

class openingVC extends Component {

    onButtonPress(event){
        Alert.alert('Button Pressed');
    }

    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        }
        return (

            <View style={{alignItems: 'center'}}>
                <Image source={require('./img/Home Logo.png')} style={styleText.img} />
                <Text style={styleText.title}>STYLE</Text>
                <Text style={styleText.subtitle}>AGAIN</Text>
                <Text style={styleText.content}>Shop from your favorite</Text>
                <Text style={styleText.content1}>bloggers closest.Yep, it's cool.</Text>
                    <TouchableHighlight onPress={this.onButtonPress.bind(this)} style={styleText.buttonStyle}>
                        <View style={styleText.buttonContent}>
                            <Image source={require('./img/facebook.png')} style={styleText.iconfb} />
                            <Text style={styleText.buttontext}>Connect with Facebook</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.onButtonPress.bind(this)} style={styleText.buttonStyle}>
                        <View style={styleText.buttonContent}>
                            <Image source={require('./img/email-icon.png')} style={styleText.iconmail} />
                            <Text style={styleText.buttontext}>Sign up with Email</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20, alignSelf: 'center'}}>
                    <Text style={styleText.bottomMessage}>Already a member?</Text>
                    <Text style={styleText.bottomMessage1}>Sign in</Text>
                    </View>
            </View>
        );
    }
}

var styleText = StyleSheet.create({
    img:    {
        width: 100,
        height: 50,
        marginTop: 100,
    },
    iconfb:    {
        width: 6,
        height: 13,
        marginTop: 13,
    },
    iconmail:    {
        width: 15,
        height: 20,
        marginTop: 10,
        marginLeft: 0,
    },
    title:  {
        color: 'black',
        fontSize: 50,
    },
    subtitle:  {
        color: 'black',
        fontSize: 25,
    },
    content:  {
        color: '#91959F',
        fontSize: 15,
        marginTop: 75,
    },
    content1:  {
        color: '#91959F',
        fontSize: 15,
        marginTop: 0,
        marginBottom: 25,
    },
    buttonStyle:    {
        borderRadius:25,
        borderWidth: 2,
        borderColor: '#06BEBD',
        height: 50,
        width:  250,
        marginTop:  10,
        alignItems: 'center',
    },
    buttontext: {
        color:  '#06BEBD',
        fontSize:   15,
        marginTop:  10,
        marginLeft: 10,
    },
    buttonContent:  {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bottomMessage:  {
        color: '#91959F',
        fontSize: 15,
        marginTop: 100,
    },
    bottomMessage1:  {
        color: '#06BEBD',
        fontSize: 15,
        marginTop: 100,
    }
});
module.exports = openingVC;