import React, { useState } from 'react';
import { Dimensions, FlatList, Image, ScrollView, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import { SafeAreaView, Text, View } from 'react-native';
import { COLORS } from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CATEGORIES } from '../../consts/categories';
import foods from '../../consts/foods';
import { useNavigation } from '@react-navigation/native';
const {width} = Dimensions.get("screen") 
const cardWidth = width/2 - 20

 function HomeScreen({navigation}){
    
    const [selectedIndex, setSelectedIndex] = useState(0)
    const ListCategories = () => {
        return(
            <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                alignItems:"center",
                paddingHorizontal:20,
                paddingVertical:30
            }}
        >
            {
                CATEGORIES.map((category, index) => (
                    <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => setSelectedIndex(index)} >
                        <View style={{
                            backgroundColor: selectedIndex == index ? COLORS.primary :COLORS.secondary,
                                height:45,
                                width:120,
                                marginRight:7,
                                borderRadius:30,
                                alignItems:"center",
                                flexDirection:'row',
                                paddingHorizontal:5
                                }} >
                                <View style={{
                                height:35,
                                width:35,
                                borderRadius:25,
                                justifyContent:"center",
                                alignItems:"center",
                                backgroundColor:COLORS.white
                            }}>
                                <Image source={category.img} 
                                style={{height:30,
                                        width:30,
                                        resizeMode:"cover",
                                        borderRadius:20
                                    }}
                                />
                                </View>
                                <Text style={{ fontSize:15, 
                                                fontWeight:'bold', 
                                                marginLeft:10, 
                                                color: selectedIndex == index ? COLORS.white : COLORS.primary }}>
                                    {category.name}
                                </Text>
                            </View>
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
        )
    }
    const Card = ({food}) => {
        return (
            <View>
                <TouchableHighlight underlayColor={COLORS.white} activeOpacity={0.9} onPress={() => navigation.navigate('DetailScreen', food)} >
                <View style={{ height:220,
                            width:cardWidth,
                            marginHorizontal:10,
                            marginBottom:20,
                            marginTop:50,
                            borderRadius:15,
                            elevation:13,
                            backgroundColor:COLORS.white
            }}>
                <View style={{top:-40, alignItems:'center' }} >
                    <Image source={food.img} style={{height:120, width:120, borderRadius:80 }} />
                </View>
                <View style={{marginHorizontal:20, }}>
                    <Text style={{fontSize:18, fontWeight: "bold" }} > {food.name} </Text>
                    <Text style={{marginTop:2, fontSize:14, color:COLORS.grey }} > {food.ingredients} </Text>
                </View>
                <View style={{marginTop:10, marginHorizontal:20, justifyContent:"space-between", flexDirection:"row" }} >
                    <Text style={{fontSize:18, fontWeight:"bold"}} > ${food.price} </Text>
                    <View style={{height:30, width:30, borderRadius: 20, 
                                alignItems:"center", justifyContent:"center",
                                backgroundColor:COLORS.primary }}>
                        <Icon name ='add' size={20} color={COLORS.white} />
                    </View>
                </View>
            </View>
            </TouchableHighlight>
            </View>
        )
    }
    return(
        <SafeAreaView style={{flex:1, backgroundColor: COLORS.white }}>
            <View style={{ paddingHorizontal:20, justifyContent:'space-between', flexDirection:'row', marginTop:40 }}>
                <View>
                    <View style={{ flexDirection:"row" }}>
                        <Text style={{fontSize:28}}>Hello, </Text>
                        <Text style={{ fontSize:28, fontWeight:"bold", marginLeft:10 }} >Douglas</Text>
                    </View>
                    <Text style={{ fontSize:22, marginTop:5, color:COLORS.grey }} >What do you want today</Text>
                </View>
                <Image source={require("../../assets/p1.jpeg")} style={{height:50, width:50, borderRadius:25}} />
            </View>
            <View style={{ paddingHorizontal:20, flexDirection:"row", marginTop:40 }} >
                <View style={{ flex:1, height:50, borderRadius:10, flexDirection:'row', backgroundColor:COLORS.light }}>
                    <Icon name="search" size={28} style={{paddingTop:10, paddingLeft:10, paddingRight:5}} />
                    <TextInput placeholder='search for food' style={{ flex:1, fontSize:18 }} />
                </View>
                <View 
                style={{ 
                    width:50, alignItems:"center", justifyContent:'center', 
                    borderRadius:10, backgroundColor:COLORS.primary, height:50,
                    marginLeft:10
                    }} >
                    <Icon size={28} color={COLORS.white} name='tune' />
                </View>
            </View>
            <View>
            <ListCategories />
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={foods}
                renderItem={({item}) => <Card food={item} /> }
            />
        </SafeAreaView>
    )
}

export default HomeScreen