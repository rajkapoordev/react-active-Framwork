'use strict';
//
// var React = require('react');
// var ReactNative = require('react-native');
// var {
//     StyleSheet,
//     TabBarIOS,
//     Text,
//     View,
// } = ReactNative;

import React, { Component } from 'react'
import {
    StyleSheet,
    TabBarIOS,
    Text,
    View,
    Image,
    Button,
    Alert,
    TouchableHighlight
} from 'react-native';
var openingVC = require('./openingVC');
var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';

class shopPageVC extends React.Component {
    static title = '<TabBarIOS>';
    static description = 'Tab-based navigation.';
    static displayName = 'TabBarExample';

    onProfileClicked(event){
        this.props.navigator.push({
            title: 'Opening Screen',
            component:openingVC,
            navigationBarHidden:true
        })
    }
    state = {
        selectedTab: 'redTab',
        notifCount: 0,
        presses: 0,
    };

    _renderContent = (color: string, pageText: string, num?: number) => {
        return (
            <View style={[styles.tabContent, {backgroundColor: color}]}>
                <Text style={styles.tabText}>{pageText}</Text>
                <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
            </View>
        );
    };

    render() {
        return (
            <TabBarIOS
                unselectedTintColor="black"
                tintColor="#06BEBD"
                unselectedItemTintColor="black"
                barTintColor="white">
                <TabBarIOS.Item
                    title="SHOP"
                    icon={require('./img/hanger1.png')}
                    selected={this.state.selectedTab === 'SHOP'}
                    onPress={() => {
                    this.setState({
                    selectedTab: 'SHOP',
                    });
                    }}>
                    {this._renderContent('#414A8C', 'SHOP')}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="ALERTS"
                    icon={require('./img/bell_default.png')}
                    selected={this.state.selectedTab === 'ALERTS'}
                    onPress={() => {
                    this.setState({
                    selectedTab: 'ALERTS',
                    });
                    }}>
                    {this._renderContent('#783E33', 'ALERTS')}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="FAVORITES"
                    icon={require('./img/Hear.png')}
                    selected={this.state.selectedTab === 'FAVORITES'}
                    onPress={() => {
                    this.setState({
                    selectedTab: 'FAVORITES',
                    });
                    }}>
                    {this._renderContent('#21551C', 'FAVORITES')}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="PROFILE"
                    icon={require('./img/Profile.png')}
                    selected={this.state.selectedTab === 'PROFILE'}
                    onPress={this.onProfileClicked.bind(this)}>
                    {this._renderContent('#2155FF', 'PROFILE')}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="BAG"
                    icon={require('./img/bag_default.png')}
                    selected={this.state.selectedTab === 'BAG'}
                    onPress={() => {
                    this.setState({
                    selectedTab: 'BAG',
                    });
                    }}>
                    {this._renderContent('#CB55FF', 'BAG')}
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