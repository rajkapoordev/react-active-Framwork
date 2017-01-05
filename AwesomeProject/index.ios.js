'use strict';

import  MyScene from  './MyScene';
var React = require('react');
//var ReactNative = require('react-native');
import ReactNative, { View, Text, Navigator } from 'react-native';

var openingVC = require('./openingVC');
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
        return (<ReactNative.NavigatorIOS style={styles.container} initialRoute={{title: '', component: openingVC, navigationBarHidden: true}}/>);
    }
}

ReactNative.AppRegistry.registerComponent('AwesomeProject',function(){return AwesomeProject});
