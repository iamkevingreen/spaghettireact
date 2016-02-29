var React = require('react-native');

var {
  View,
  Text,
  TextInput,
  DatePickerIOS,
  StyleSheet
} = React;


var Button = require('react-native-button');
var SmokeRouter = require('../Router');
var t = require('tcomb-form-native');

var Form = t.form.Form;

var Person = t.struct({
  quit: t.Date,
  cost: t.Number,
  smokes: t.Number
});

var options = {
  fields: {
    quit: {
      mode: 'date'
    }
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#CCCCCC',
  }
});

class Main extends React.Component{
  constructor() {
    super();
    this.state = {
      value: {
        cost: 14,
        smokes: 20
      }
    }
    this._onChange = this._onChange.bind(this);
  }
  render() {
    return (
      <View>
        <Text>Date you Quit:</Text>
        <Form
          ref="form"
          type={Person}
          value={this.state.value}
          onChange={this.onChange}
          options={options}
          />
        <Button onPress={() => {
          let profile = {
            date: this.state.date
          }
          let route = SmokeRouter.SmokeIndex();
          this.props.navigator.push(route);
        }}>
          Check your Stats
        </Button>
      </View>
    )
  }
  _onChange(value) {
    this.setState({value: value})
  }
}


module.exports = Main;
