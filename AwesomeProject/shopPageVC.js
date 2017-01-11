'use strict';

import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    Alert,
    TouchableHighlight,
    TabBarIOS,
    Navigator
} from 'react-native';
var FirstVC = require('./firstVC');
var SearchPage = require('./SearchPage');
class shopPageVC extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'firstVC'
        };
    }
    render() {
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}
                       unselectedTintColor="black"
                       tintColor="#06BEBD"
                       unselectedItemTintColor="black"
                       barTintColor="#FFFFFF">
                <TabBarIOS.Item
                    title="SHOP"
                    selected={this.state.selectedTab === 'firstVC'}
                    icon={require('./img/hanger1.png')}
                    onPress={() => {
                    this.setState({
                        selectedTab: 'firstVC',
                    });
                }}>
                    <FirstVC/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="ALERTS"
                    selected={this.state.selectedTab === 'SearchPage'}
                    icon={require('./img/bell_default.png')}
                    onPress={() => {
                    this.setState({
                        selectedTab: 'SearchPage',
                    });
                }}>
                    <SearchPage/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="FAVORITES"
                    selected={this.state.selectedTab === 'firstVC'}
                    icon={require('./img/Hear.png')}
                    onPress={() => {
                    this.setState({
                        selectedTab: 'firstVC',
                    });
                }}>
                    <FirstVC/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="PROFILE"
                    selected={this.state.selectedTab === 'SearchPage'}
                    icon={require('./img/Profile.png')}
                    onPress={() => {
                    this.setState({
                        selectedTab: 'SearchPage',
                    });
                }}>
                    <SearchPage/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="BAG"
                    selected={this.state.selectedTab === 'firstVC'}
                    icon={require('./img/bag_default.png')}
                    onPress={() => {
                    this.setState({
                        selectedTab: 'firstVC',
                    });
                }}>
                    <FirstVC/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

var styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        alignItems: 'center',
    },
    tabText: {
        color: 'white',
        margin: 50,
    },
});

module.exports = shopPageVC;