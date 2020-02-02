import React from 'react';
import {
  View,
  Text,
  Dimensions
} from 'react-native';
import {

  createAppContainer,

} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

// import { createStackNavigator } from 'react-navigation-stack';
import Home from './appData/components/Home'
import Naat from './appData/components/Naat'
import FullAbhang from './appData/components/FullAbhang'

const DRAWER_WIDTH = Dimensions.get('window').width * 0.83;

const RouteConfigs =
{
  Home: {
    screen: Home
  },
  Naat: {
    screen: Naat
  },
  FullAbhang: {
    screen: FullAbhang
  }
};

class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <View style={{ flex: 1, width: 300 }}>
        <Text>{'Menu'}</Text>
      </View >
    );
  }
}


const DrawerNavigatorConfigs = {
  drawerWidth: DRAWER_WIDTH,
  drawerPosition: "left",
  drawerType: "slide",
  edgeWidth: 30,
  drawerLockedMode: 'unlocked',
  contentOptions: {
    itemStyle: {
      height: 50
    },
    labelStyle: {
      fontSize: 16,
      fontFamily: 'NotoSans-Regular',
      fontWeight: 'normal'
    }
  },

};

const DrawerNavigator = createDrawerNavigator(RouteConfigs, DrawerNavigatorConfigs);

export default createAppContainer(DrawerNavigator);