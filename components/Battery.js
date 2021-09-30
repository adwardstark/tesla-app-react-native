import React from 'react'
import { View, Text, Image } from 'react-native'

export default function Battery() {
    return (
        <View>
            <View style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20
            }}>
                <Image source={require("../assets/battery.png")} style={{
                    height: 26,
                    width: 70,
                    marginRight: 12
                }}/>
                <Text style={{
                    color: "white",
                    fontSize: 35,
                    fontWeight: "bold"
                }}>150 mi</Text>
            </View>
            <View style={{ alignItems: "center", paddingTop: 10}}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "white"
                }}>Parked</Text>
            </View>
        </View>
    )
}
