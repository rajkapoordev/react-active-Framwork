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
    Alert,
    Navigator
} from 'react-native';

const
    onButtonPress = () => {
        Alert.alert('Button has been pressed!');
    };

class Greeting extends Component {
    render() {
        return (
            <Text style={styleText.bigblue} >Hello {this.props.username}!</Text>
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
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            // Try setting `alignItems` to 'flex-start'
            // Try setting `justifyContent` to `flex-end`.
            // Try setting `flexDirection` to `row`.


            <View style={{
                flex: 1,

                alignItems: 'center',
                marginTop: 65,
            }}>
                <Greeting  username='ABC'/>
                <Greeting username='DEF'/>
                <Greeting username='GHI'/>
                <View>
                    <Blink textvalue='Blink1'/>
                    <Blink textvalue='Blink2'/>
                    <Blink textvalue='Blink3'/>
                </View>
                <View>
                    <Button title='Go' onPress={onButtonPress}/>
                </View>

                <Image source={pic} style={{width: 193, height: 110}}/>
                <TextInput
                    style={{height: 40,borderWidth: 1,
                        borderColor: 'blue', marginTop:10 }}
                    placeholder="Type here to translate!"
                    onChangeText={(text) =>{
                        console.log('===two render===');
                        return this.setState({text})} }
                />

            </View>
        );
    }


}

var styleText = StyleSheet.create({
    bigblue: {
         color: 'blue',
         fontWeight: 'bold',
         fontSize: 30,

    },
    red: {
        fontWeight: 'bold',
         fontSize: 30,
    },
});
module.exports = firstVC;