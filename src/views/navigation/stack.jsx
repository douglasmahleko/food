import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import DetailScreen from "../screens/detailScreen";
import OnBoardScreen from "../screens/onBoardScreen";
import BottomNavigator from "./bottomNavigator";
import 'react-native-gesture-handler'

const screens = {
    BorderScreen : {
        screen: OnBoardScreen 
    },
    Home : {
        screen : BottomNavigator,
        navigationOptions:{
            headerShown:false
        }
    },
    DetailScreen : {
        screen: DetailScreen
    }
}

const Stack = createStackNavigator(screens)

export default createAppContainer(Stack)