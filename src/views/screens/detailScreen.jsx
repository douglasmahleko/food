import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../../consts/colors';
import SecondaryButton from '../components/secondButton';


 function DetailScreen({navigation, route}){
    const item = route.params
    return(
        <SafeAreaView style={{backgroundColor:COLORS.white}}>
            <View style={{flexDirection:"row", alignItems:"center", paddingVertical:20, marginHorizontal:20}}>
                <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
                <Text style={{fontSize:20, fontWeight:"bold"}} >Details </Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{height:280, alignItems:"center", justifyContent:"center"}} >
                    <Image source={item.img} style={{height:220, width:220, borderRadius: 150}} />
                </View>
                <View style={{backgroundColor:COLORS.primary, borderTopRightRadius:40,
                            borderTopLeftRadius:40, paddingHorizontal:20,
                            paddingTop:40,paddingBottom:60
                }}>
                    <View style={{flexDirection:'row', alignItems:"center", justifyContent:"space-between"}}>
                        <Text style={{fontSize:25, fontWeight:"bold", color:COLORS.white}} > {item.name} </Text>
                        <View style={{backgroundColor:COLORS.white, height:50, 
                            width:50, borderRadius:30, alignItems:"center", justifyContent:"center"}}>
                            <Icon name='favorite-border' color={COLORS.primary} size={25} />
                        </View>
                    </View>
                    <Text style={{lineHeight:22, fontSize:16, marginTop:10, color:COLORS.white}}>
                    But if we want to show the tab bar only on the Home, Feed and Notifications screens, but not on the
                     Profile and Settings screens, we'll need to change the navigation structure. The easiest way to 
                     achieve this is to nest the tab navigator inside the first screen of the stack instead of nesting
                      stack inside tab navigator:
                    </Text>
                    <View style={{marginTop:40, marginBottom:120}}>
                            <SecondaryButton title="Add To Cart" />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default DetailScreen