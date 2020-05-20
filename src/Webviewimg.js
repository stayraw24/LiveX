import React,{ Component} from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import {WebView} from 'react-native-webview';


export default class Webviewimg extends Component{
  render(){
    return(
    	<WebView
          automaticallyAdjustContentInsets={true} 
          source ={{ uri: 'https://www.covid19india.org/'}}
          style ={{margin: 20, flex: 1}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          />
      );
  }
  }


