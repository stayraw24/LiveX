import React from 'react';
import PhoneAuth from './PhoneAuth';
import { View, Text, StatusBar} from 'react-native';

class SplashScreen extends React.Component {
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    )
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('PhoneAuth')
    }
  }

  render() {
    return (
      <View style={styles.viewStyles}>
      <StatusBar backgroundColor="#523df2" barStyle="light-content" />
        <Text style={styles.textStyles}>
          NewsX
        </Text>
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#523df2'
  },
  textStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  }
}

export default SplashScreen;