/**
 * Created by LaNet on 1/2/17.
 */
'use strict';

import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

class openingVC extends Component {

    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        }
        return (

            <View style={{alignItems: 'center'}}>
                <Image source={require('./img/Home Logo.png')} />
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
        fontSize: 50,
    },
});
module.exports = openingVC;