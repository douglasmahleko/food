import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../consts/colors";


const SecondaryButton = ({title, onPress = () => {}}) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}> 
            <View style={{
        height:60,
        borderRadius:100,
        backgroundColor : COLORS.white,
        alignItems:"center",
        justifyContent:"center",
        marginBottom: 30
    }}>
                <Text style={{
        color:COLORS.primary,
        fontWeight:"bold",
        fontSize:18
    }}> {title} </Text>
            </View>
        </TouchableOpacity>

    )
}

export default SecondaryButton