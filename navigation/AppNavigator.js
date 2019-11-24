import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import StorybookScreen from '../storybook';
import PreLoginScreen from '../screens/login/PreLoginScreen';
import StorybookPreStartScreen from '../screens/storybook/StorybookPreStartScreen';

const StorybookStack = createStackNavigator({
  StorybookPreStart: StorybookPreStartScreen,
  StorybookHome: StorybookScreen,
});
const AuthStack = createStackNavigator({ PreLogin: PreLoginScreen });
//const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });

let initialRouteName = 'Auth';
// show storybook in DEV mode only
if (__DEV__) {
  initialRouteName = 'Storybook';
}

const AppNavigator = createSwitchNavigator(
  {
    Storybook: StorybookStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: initialRouteName,
  }
);

export default createAppContainer(AppNavigator);
