var React = require('react-native');

var {
  View,
  Text,
  Button,
  StyleSheet
} = React;


var Button = require('react-native-button');
var SmokeRouter = require('../Router');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CCCCCC',
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

class Index extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <Text>Another Route spaghetti</Text>
      </View>
    )
  }
}

module.exports = Index;
