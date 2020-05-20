import React, { Component } from 'react';
import { Container, Header, Tab, Content,
Footer, FooterTab, Button,Text, Badge, Body, 
Left, Tabs, ScrollableTab, Title } from 'native-base';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';
import Tab5 from './Tab5';
import {Drawer} from 'native-base';
import SideBar from './SideBar';
import {Alert, BackHandler} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



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
                    </Body>   
                </Header>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="General">
            <Tab1 />
          </Tab>
          <Tab heading="Technology">
            <Tab2 />
          </Tab>
          <Tab heading="Business ">
          <Tab3 />
          </Tab>
          <Tab heading="World">
          <Tab4/>
          </Tab>
          <Tab heading="COVID19-tracker">
          <Tab5/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

