import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../consts/colors";


const PrimaryButton = ({title, onPress = () => {}}) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}> 
            <View style={{
        height:60,
        borderRadius:100,
        backgroundColor : COLORS.primary,
        alignItems:"center",
        justifyContent:"center",
        marginBottom: 30
    }}>
                <Text style={{
        color:COLORS.white,
        fontWeight:"bold",
        fontSize:18
    }}> {title} </Text>
            </View>
        </TouchableOpacity>

    )
}

export default PrimaryButton