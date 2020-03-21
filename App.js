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
import Haripth from './appData/components/Haripath'
import HaripathList from './appData/components/HaripathList'
import Niryan from './appData/components/Niryan'
import ShowList from './appData/components/ShowList'
import KakdaList from './appData/components/KakdaList'
import StotraList from './appData/components/StotraList'
import ShowOnePage from './appData/components/ShowOnePage'

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
  },
  Haripath: {
    screen: Haripth
  },
  HaripathList: {
    screen: HaripathList
  },
  Niryan: {
    screen: Niryan
  },
  ShowList:
  {
    screen: ShowList
  },
  KakdaList: {
    screen: KakdaList
  }, 
  StotraList: {
    screen: StotraList
  },
  ShowOnePage:{
    screen:ShowOnePage
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