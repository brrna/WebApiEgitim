import React from "react";
import { Text, View } from "react-native";

const UserCard = (props) => {
    return(
        <View
            style={{
                flex: 1,
                backgroundColor: "white"
            }}>
                <Text>{props.firstname}</Text>
        </View>
    )
}

export default UserCard;