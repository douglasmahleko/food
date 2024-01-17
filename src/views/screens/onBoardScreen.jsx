import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../consts/colors';
import PrimaryButton from '../components/button';


 function OnBoardScreen({navigation}){
    return(
        <SafeAreaView style={{flex:1, backgroundColor : COLORS.white }}>
            <View style={{height:500}}>
                <Image 
                style={{width:'90%', 
                resizeMode: 'contain', 
                borderRadius:9999,
                marginTop:20,
                paddingTop:400,
                marginLeft:25,
                borderWidth:3,
                borderColor: COLORS.white,
            }}
                 source={require("../../assets/burger1.jpeg")} />
            </View>
            <View style={{
        flex:1,
        paddinBottom: 40,
        paddingHorizontal: 50,
        justifyContent: "space-between"
    }}>
                <View>
                    <Text style={{fontSize:32, fontWeight:"bold", textAlign: "center" }} >
                        Delicious Food
                    </Text>
                    <Text style={{
                        textAlign:"center",
                        fontSize:18,
                        marginTop:20,
                        color: COLORS.grey
                    }} >
                        We help you find to find best and delicious food
                    </Text>
                </View>
                <View style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flex:1,
        height:50
    }} >
                    <View style={{
        height:12,
        width:30,
        borderRadius:10,
        marginHorizontal:5,
        borderRadius:10,
        backgroundColor:COLORS.primary
    }} />
                    <View style={{
        height:12,
        width:12,
        borderRadius:6,
        marginHorizontal:5,
        borderRadius:10,
        backgroundColor:COLORS.grey
    }} />
                    <View style={{
        height:12,
        width:12,
        borderRadius:6,
        marginHorizontal:5,
        borderRadius:10,
        backgroundColor:COLORS.grey
    }} />
                </View>
                <PrimaryButton 
                onPress={()=> navigation.navigate('Home')}
                 title={"Get Started"} />
            </View>
        </SafeAreaView>
    )
}


export default OnBoardScreen