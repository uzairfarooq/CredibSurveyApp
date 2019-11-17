import PreLoginScreen from '../screens/PreLoginScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


//const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = createStackNavigator({ PreLogin: PreLoginScreen });

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Auth',
    }
  )
);
