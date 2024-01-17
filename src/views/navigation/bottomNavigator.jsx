import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import HomeScreen from "../screens/homeScreen";
import CartScreen from "../screens/cartScreen";
import { COLORS } from "../../consts/colors";
import 'react-native-gesture-handler'
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import DetailScreen from "../screens/detailScreen";

const Tab = createBottomTabNavigator()

const BottomNavigator = ({navigation}) => {
    return (
                <Tab.Navigator
                    
                    screenOptions={{
                        tabBarShowLabel:false,
                        headerShown:false,
                        style : {
                            height:55,
                            elevation:0,
                            borderTopWidth: 0
                        },
                        showlabel: false,
                    }}
                >
                    <Tab.Screen 
                        name ="HomeScreen"
                        component={HomeScreen}
                        options={{
                            tabBarIcon : ({focused}) => (
                                <Icon name="home-filled" style={{color:focused ? 'purple' : 'coral'}} size={25} />
                                ) 
                        }}
                    />
                    <Tab.Screen 
                        name ="LocalMall"
                        component={HomeScreen}
                        options={{
                            tabBarIcon : ({focused}) => (
                                <Icon name="local-mall" style={{color:focused ? 'purple' : 'coral'}} size={25} />
                                ) 
                        }}
                    />
                    <Tab.Screen 
                        name ="Search"
                        component={CartScreen}
                        options={{
                            tabBarIcon : ({focused}) => (
                                <View style={{
                                    height:60,
                                    width:60,
                                    justifyContent:"center",
                                    alignItems:"center",
                                    backgroundColor:COLORS.white,
                                    borderColor:COLORS.primary,
                                    borderWidth:2,
                                    borderRadius:30,
                                    top:-25,
                                    elevation:5
                                }}>
                                    <Icon name="search" style={{color:focused ? 'purple' : 'grey'}} size={25} />
                                </View>
                                ) 
                        }}
                    />
                    {/* <Tab.Screen 
                        name="DetailScreen" 
                        component={DetailScreen} 
                        options={{
                            tabBarButton: () => null,
                            tabBarVisible: false,
                        }}
                        /> */}
                    <Tab.Screen 
                        name ="Favorite"
                        component={HomeScreen}
                        options={{
                            tabBarIcon : ({focused}) => (
                                <Icon name="favorite" style={{color:focused ? 'purple' : 'coral'}} size={25} />
                                ) 
                        }}
                    />
                    
                    <Tab.Screen 
                        name ="Cart"
                        component={CartScreen}
                        options={{
                            tabBarIcon : ({focused}) => (
                                <Icon name="shopping-cart" style={{color:focused ? 'purple' : 'coral'}} size={25} />
                                ) 
                        }}
                    />
                </Tab.Navigator>

    )
}

export default BottomNavigator