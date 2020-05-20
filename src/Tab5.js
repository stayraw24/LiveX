import React, { Component } from 'react';
import {Alert,ScrollView,StyleSheet, ActivityIndicator,TouchableOpacity, FlatList, View} from 'react-native';
import { Container,Card,CardView, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import {WebView} from 'react-native-webview';


export default class ListThumbnailExample extends Component {
  constructor(props){
    super(props);

    this.state={
    }
  }

  render() {
    return (
          <WebView
          automaticallyAdjustContentInsets={true} 
          source ={{ uri: 'https://www.coronatracker.com/country/india/'}}
          style ={{margin: 20, flex: 1}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          />
    );
  }
}  

