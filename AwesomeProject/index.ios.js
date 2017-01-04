'use strict';

import  MyScene from  './MyScene';
var React = require('react');
//var ReactNative = require('react-native');
import ReactNative, { View, Text, Navigator } from 'react-native';
var CreateNewAccount = require('./CreateNewAccount');

var firstVC = require('./firstVC');

var styles = ReactNative.StyleSheet.create({
    text: {
        color: 'black',
        backgroundColor: 'white',
        fontSize: 30,
        margin: 80
    },
    container: {
        flex: 1
    }
});


class  AwesomeProject extends React.Component {
    render(){
        console.log('===one render===');
        //madhu

       return (
           <ReactNative.NavigatorIOS style={styles.container} initialRoute={{title: 'CreateNewAccount', component: CreateNewAccount,  navigationBarHidden: true}}/>
       );

        //Rupali
        // return (<ReactNative.NavigatorIOS style={styles.container} initialRoute={{title: 'firstVC', component: firstVC,}}/>);

    }
}

ReactNative.AppRegistry.registerComponent('AwesomeProject',function(){return AwesomeProject});
