import React, { Component } from 'react';
import { Container, Header, Tab, Button, Icon, Body, Content, Left, Tabs, ScrollableTab, Title } from 'native-base';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import {Drawer} from 'native-base';
import SideBar from './SideBar';
import {Alert, BackHandler} from 'react-native';

export default class TabsScrollableExample extends Component {

  static navigationOptions={
    header:null
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    this.backHandler.remove()
  }

  handleBackPress = () => {
    //this.goBack(); // works best when the goBack is async
    Alert.alert('Exit App','Do you want to Exit?',
      [{text:'Yes ', onPress:()=>BackHandler.exitApp()}],
      {cancelable:true})
    return true;
  }


  render() {
    return (
      <Container>
        <Header hasTabs style={{justifyContent:'center',flexDirection:'column'}}>
        <Title style={{alignSelf:'center',fontSize:25}}>NewsX</Title>
        <Title style={{alignSelf:'center',fontSize:10}}>News.Not Noise.</Title>
                    <Body>
                    <Title style={{ color: '#FFF'}}> title </Title>
                    </Body>   
                </Header>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="General">
            <Tab1 />
          </Tab>
          <Tab heading="Technology">
            <Tab2 />
          </Tab>
          <Tab heading="National ">
          <Tab3 />
          </Tab>
          <Tab heading="International">
          <Tab3/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}