/**
 * Created by LaNet on 1/2/17.
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
    TouchableHighlight,
    ActivityIndicator,
    Image,
    Button,
    Alert
} from 'react-native';

const
    onButtonPress = () => {
        Alert.alert('Button has been pressed!');
    };

class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.username}!</Text>
        );
    }
}

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};

        // Toggle the state every second
        setInterval(() => {
            this.setState({ showText: !this.state.showText });
        }, 1000);
    }

    render() {
       let display = this.state.showText? this.props.textvalue : '';
       return(
           <Text> {display}</Text>
       );
    }
}
class firstVC extends Component {

    render() {
        console.log('===SearchPage render===');

        return (
            // Try setting `alignItems` to 'flex-start'
            // Try setting `justifyContent` to `flex-end`.
            // Try setting `flexDirection` to `row`.
            <View style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 65,
            }}>
                <Greeting style={styleText.bigblue} username='ABC'/>
                <Greeting username='DEF'/>
                <Greeting username='GHI'/>
                <View style={styleText.red}>
                    <Blink textvalue='Blink1'/>
                    <Blink textvalue='Blink2'/>
                    <Blink textvalue='Blink3'/>
                </View>
                <View>
                    <Button title='Go' onPress={onButtonPress}/>
                </View>
            </View>
        );
    }


}


var styleText = StyleSheet.create({
    bigblue: {
        // color: 'blue',
        // fontWeight: 'bold',
        // fontSize: 30,
        borderWidth: 1,
        borderColor: 'blue',
    },
    red: {
        borderWidth: 1,
        borderColor: 'red',
    },
});
module.exports = firstVC;