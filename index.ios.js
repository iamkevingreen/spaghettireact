/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var Main = require('./App/Components/Main');
import ExNavigator from '@exponent/react-native-navigator';
var SmokeRouter = require('./App/Router');

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  TabBarIOS,
  TextInput,
  Text,
  NavigatorIOS,
  Navigator,
  DatePickerIOS,
  View
} from 'react-native';



class Smoked extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Smoked!
        </Text>
        <Text>
          Let's collect some basic information
        </Text>
      </View>
    );
  }
}

let mainRoute = {
  name: 'Main',
  compoent: Main
}

class MyApp extends Component{
  render() {
    return (
      <ExNavigator
        initialRoute={SmokeRouter.getHomeRoute()}
        style={{ flex: 1 }}
        sceneStyle={{ paddingTop: 64 }}
      />
    );
  }
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    backgroundColor: '#5cafec',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('smoked', () => MyApp);
