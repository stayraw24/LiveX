import React, { Component } from 'react';
import {getArticles} from './news';
import {Alert,StyleSheet, ActivityIndicator,TouchableOpacity,Image, FlatList, View} from 'react-native';
import { Container, Header, Content, List,Card,CardItem,Icon, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import {DataItem} from './dataitem';
import {WebView} from 'react-native-webview';
import Webviewimg from './Webviewimg';
import Tab3 from './Tab3';
import Splash from './Splash';
import Tabs from './Tabs';
import SideBar from './SideBar';
import Modal from './Modal';



export default class ListThumbnailExample extends Component {
  constructor(props){
    super(props);

    this.state={
      modeVisible: false,
      isLoading: true,
      dataSource:[],
      modalVisible: false,
    }
  }

  componentDidMount () {
    console.log("started");
console.log(this.state);
    var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=in&' +
          'category=general&' +
          'apiKey=39d7ec10bd874b6c9333b8b4fe88f949';
var req = new Request(url);

    fetch(req)
    .then ((response) => response.json())
    .then ((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson.articles 
      })
      console.log(responseJson);
      
    })
 }

 setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  _renderItem = ({item,index}) => {

    return(
      <View>
      <ListItem>    
      <Card style={{flex:1}}>
      <TouchableOpacity onPress={() => {
            this.setModalVisible(true);
          }}>
            <CardItem>
              <Left>
                <Body>
                  <Text style={{fontWeight:'bold'}} numberOfLines={5}>{item.title}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{ uri:item.urlToImage }} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Body>
                  <Text note numberOfLines={10}>{item.description}</Text>
                  <Text note numberOfLines={10}>{item.author}</Text>
                  <Text note numberOfLines={1}>{item.publishedAt}</Text>

              </Body>
            </CardItem>
            </TouchableOpacity>
          </Card>
          </ListItem>
          {Modal}
          </View>
      );
  }



  render() {
    let {dataSource, isLoading} =this.state;
    //console.log(this.state);
    
    return (
       <View>
            {
              this.state.isLoading ? 
                  <ActivityIndicator style={{marginTop:200,alignSelf:'center'}} animating={this.state.isLoading}/>
            :
            <FlatList
            data ={dataSource}
            renderItem ={this._renderItem}
            keyExtractor={(item,index) => index.toString()}
            />
            }
      </View>
    );
  }
}  

const styles = StyleSheet.create({
  
  item: {
    backgroundColor: 'cyan',
    padding: 20,
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
  },
  desc: {
    fontSize: 15,
  }
});


