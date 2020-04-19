import React, { Component } from 'react';
import {getArticles} from './news';
import {Alert, ActivityIndicator, FlatList, View} from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import DataItem from './dataitem';

export default class ListThumbnailExample extends Component {
  constructor(props){
    super(props);

    this.state={
      isLoading: true,
      dataSource:[]
    }
  }

  ComponentDidMount () {

    var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=39d7ec10bd874b6c9333b8b4fe88f949';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })

    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then ((response) => response.json())
    // .then ((responseJson) => {
    //   this.setState({
    //     isLoading: false,
    //     dataSource: responseJson  
    //   })

    // })
  }

  // _renderItem = ({item,index}) => {
  //   return(
  //     <View>
  //       <Text>{item.title}</Text>
  //     </View>
  //     )
  // }

  render() {
    // let {dataSource, isLoading} =this.state
    // console.log(this.state.dataSource);
    
    return (
      <View>
            <FlatList
            // data ={dataSource}
            // renderItem ={this._renderItem}
            // keyExtractor={(item,index) => index.toString()}
            />
      </View>
    );
  }
}  