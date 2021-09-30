import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCog, faToolbox } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <View style={{
            marginLeft: 20,
            marginRight: 20,
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <TouchableOpacity>
                <FontAwesomeIcon icon={faCog} size={24} style={{color: "white"}}/>
            </TouchableOpacity>
            <Text style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
                alignItems: "center",
                justifyContent: "center"
            }}>Model 3S</Text>
            <TouchableOpacity>
                <FontAwesomeIcon icon={faToolbox} size={24} style={{color: "white"}}/>
            </TouchableOpacity>
        </View>
    )
}
