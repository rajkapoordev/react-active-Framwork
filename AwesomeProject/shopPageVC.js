'use strict';

import React, { Component } from 'react'
import {
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

    render() {
        const routes = [
            {name: 'FirstVC', index: 0},
            {name: 'SearchPage', index: 1},
        ];
        return (
            <Navigator
                initialRoute={{name: 'FirstVC', index: 0}}
                renderScene={(route, navigator) =>
                {
                    return (
                    <View style={{ flex: 1, }}>
                    <FirstVC navigator={navigator} />
                    <TabBarIOS
                        unselectedTintColor="black"
                        tintColor="#06BEBD"
                        unselectedItemTintColor="black"
                        barTintColor="white">
                        <TabBarIOS.Item
                            selected={true}
                            icon={require('./img/hanger1.png')}
                            title='SHOP'
                            navigator={navigator}
                            onPress={() => {
                                navigator.push(routes[1]);
                            }}>
                            <View></View>
                        </TabBarIOS.Item>
                        <TabBarIOS.Item
                            selected={false}
                            icon={require('./img/bell_default.png')}
                            title='ALERTS'
                            navigator={navigator}
                            onPress = {() => {
                                navigator.push(routes[0]);
                            }}>
                            <View></View>
                        </TabBarIOS.Item>
                        <TabBarIOS.Item
                            selected={false}
                            icon={require('./img/Hear.png')}
                            title='FAVORITES'
                            navigator={navigator}
                            onPress = {() => {
                                navigator.push(routes[1]);
                            }}>
                            <View></View>
                        </TabBarIOS.Item>
                        {/*<TabBarIOS.Item*/}
                            {/*selected={false}*/}
                            {/*icon={require('./img/Profile.png')}*/}
                            {/*title='PROFILE'*/}
                            {/*navigator={navigator}*/}
                            {/*onPress = {() => {*/}
                                {/*navigator.push(routes[0]);*/}
                            {/*}}>*/}
                            {/*<View></View>*/}
                        {/*</TabBarIOS.Item>*/}
                        {/*<TabBarIOS.Item*/}
                            {/*selected={false}*/}
                            {/*icon={require('./img/bag_default.png')}*/}
                            {/*title='BAG'*/}
                            {/*navigator={navigator}*/}
                            {/*onPress = {() => {*/}
                                {/*navigator.push(routes[1]);*/}
                            {/*}}>*/}
                            {/*<View></View>*/}
                        {/*</TabBarIOS.Item>*/}
                    </TabBarIOS>
                </View>
              );
                }
                }/>
            // <TabBarIOS
            //     unselectedTintColor="black"
            //     tintColor="#06BEBD"
            //     unselectedItemTintColor="black"
            //     barTintColor="white">
            //     <TabBarIOS.Item
            //         title="SHOP"
            //         icon={require('./img/hanger1.png')}
            //         selected={this.state.selectedTab === 'SHOP'}
            //         onPress={() => {
            //         this.setState({
            //         selectedTab: 'SHOP',
            //         });
            //         }}>
            //         {this._renderContent('#414A8C', 'SHOP')}
            //     </TabBarIOS.Item>
            //     <TabBarIOS.Item
            //         title="ALERTS"
            //         icon={require('./img/bell_default.png')}
            //         selected={this.state.selectedTab === 'ALERTS'}
            //         onPress={() => {
            //         this.setState({
            //         selectedTab: 'ALERTS',
            //         });
            //         }}>
            //         {this._renderContent('#783E33', 'ALERTS')}
            //     </TabBarIOS.Item>
            //     <TabBarIOS.Item
            //         title="FAVORITES"
            //         icon={require('./img/Hear.png')}
            //         selected={this.state.selectedTab === 'FAVORITES'}
            //         onPress={() => {
            //         this.setState({
            //         selectedTab: 'FAVORITES',
            //         });
            //         }}>
            //         {this._renderContent('#21551C', 'FAVORITES')}
            //     </TabBarIOS.Item>
            //     <TabBarIOS.Item
            //         title="PROFILE"
            //         icon={require('./img/Profile.png')}
            //         selected={this.state.selectedTab === 'PROFILE'}
            //         onPress={this.onProfileClicked.bind(this)}>
            //         {this._renderContent('#2155FF', 'PROFILE')}
            //     </TabBarIOS.Item>
            //     <TabBarIOS.Item
            //         title="BAG"
            //         icon={require('./img/bag_default.png')}
            //         selected={this.state.selectedTab === 'BAG'}
            //         onPress={() => {
            //         this.setState({
            //         selectedTab: 'BAG',
            //         });
            //         }}>
            //         {this._renderContent('#CB55FF', 'BAG')}
            //     </TabBarIOS.Item>
            // </TabBarIOS>
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