import React from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../../consts/colors';
import foods from '../../consts/foods';
import PrimaryButton from '../components/button';


 function CartScreen({navigation}){
    const CartCard = ({item}) => {
        return(
            <View style={{height:100, elevation:15, backgroundColor:COLORS.white, alignItems:"center",
                        flexDirection:"row", borderRadius:10, marginVertical:10, marginHorizontal:20,
                        paddingHorizontal:10
            }}>
                <Image source={item.img} style={{height:80, width:80, borderRadius:50}} />
                <View style={{height:100, marginLeft:10,flex:1,paddingVertical:20}} >
                    <Text style={{fontWeight:"bold", fontSize:16}} > {item.name} </Text>
                    <Text style={{color:COLORS.grey, fontSize:13}} > {item.ingredients} </Text>
                    <Text style={{fontWeight:"bold", fontSize:17}} > ${item.price} </Text>
                </View>
                <View style={{marginRight:20, alignItems:"center"}} >
                    <Text style={{fontSize:18, fontWeight:"bold"}}>3</Text>
                    <View style={{width:80, height:30, backgroundColor:COLORS.primary, borderRadius:30,
                                paddingHorizontal:5, flexDirection:"row", justifyContent:"center",alignContent:"center"
                    }} >
                        <Icon name='remove' size={25} color={COLORS.white} />
                        <Icon name='add' size={25} color={COLORS.white} />
                    </View>
                </View>
            </View>
        )
    }
    return(
        <SafeAreaView style={{backgroundColor:COLORS.white, flex:1}}>
            <View style={{paddingVertical:20,marginHorizontal:20,alignItems:"center", flexDirection:"row"}}>
                <Icon name='arrow-back-ios' size={28} onPress={navigation.goBack} />
                <Text style={{fontSize:20, fontWeight:"bold"}}>
                    Cart
                </Text>
            </View>
            <FlatList 
                contentContainerStyle={{paddingBottom:80}}
                showsVerticalScrollIndicator={false}
                data={foods}
                renderItem={({item}) => <CartCard item={item} />}
                ListFooterComponentStyle={{paddingHorizontal:20}}
                ListFooterComponent={() => (
                    <View>
                        <View style={{marginVertical:15, justifyContent:'space-between', flexDirection:'row'}} >
                            <Text style={{fontSize:18, fontWeight:"bold"}} >Total Price</Text>
                            <Text style={{fontSize:18, fontWeight:"bold"}} >$50</Text>
                        </View>
                        <View style={{marginHorizontal:30}}>
                            <PrimaryButton title="CHECKOUT" />
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    )
}
export default CartScreen