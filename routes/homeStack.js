import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import IntroPage from '../screens/IntroPage';
import Home from '../screens/Home'

const screens = {
    Welcome:{
        screen: IntroPage,
        navigationOptions: {
            title: 'Home',
            headerShown: false
          },
    },
    Home:{
        screen: Home
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);