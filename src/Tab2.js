import React, { Component } from 'react';
import {getArticles} from './news';
import {Alert,StyleSheet, ActivityIndicator,TouchableOpacity, FlatList, View} from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import {DataItem} from './dataitem';

export default class ListThumbnailExample extends Component {
  constructor(props){
    super(props);

    this.state={
      isLoading: true,
      dataSource:[]
    }
  }

  componentDidMount () {
    console.log("started");
console.log(this.state);
    var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=in&' +
          'category=technology&' +
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

  _renderItem = ({item,index}) => {
    return(
      <TouchableOpacity>
        <ListItem thumbnail>
              <Left>
                <Thumbnail circle source={{ uri:item.urlToImage }} />
              </Left>
              <Body>
                <Text numberOfLines={5}>{item.title}</Text>
                <Text note numberOfLines={2}>{item.description}</Text>
                <Text note numberOfLines={1}>{item.publishedAt}</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
      </TouchableOpacity>
      )
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
      </View>    );
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

