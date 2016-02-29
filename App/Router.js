'use strict';

var React = require('react-native');


let SmokeRouter = {
  getHomeRoute() {
    return {
      getSceneClass() {
        return require('./Components/Main');
      },

      onDidFocus(event) {
        console.log('Home Scene received focus.');
      },

      getTitle() {
        return 'Welcome';
      },
    };
  },
  SmokeIndex() {
    return {
      getSceneClass() {
        let Index = require('./Components/Index');
        return Index;
      },
      getTitle() {
        return 'Stats';
      }
    }
  }
}

module.exports = SmokeRouter;
