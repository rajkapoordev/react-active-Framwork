'use strict';

var React = require('react');
var ReactNative = require('react-native');
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

        return (<ReactNative.NavigatorIOS style={styles.container} initialRoute={{title: 'firstVC', component: firstVC,}}/>);
        console.log('===two render===');

    }
}

ReactNative.AppRegistry.registerComponent('AwesomeProject',function(){return AwesomeProject});
