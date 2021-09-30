import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import items from '../items'

export default function Menu() {
    return (
        items.map((item, index) => (
            <MenuItem key={index} icon={item.icon} title={item.title} subTitle={item.subTitle}/>
        ))
    )
}

const MenuItem = (props) => {
    return (
        <TouchableOpacity>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 15,
                marginBottom: 15
            }}>
                <FontAwesomeIcon icon={props.icon} size={24} style={{color: "white"}}/>
                <View style={{
                    flexGrow: 1
                }}>
                    <Text style={{
                        color: "white",
                        fontSize: 16,
                        fontWeight: "bold",
                        marginLeft: 15,
                        textTransform: "uppercase"
                    }}>{props.title}</Text>
                    {props.subTitle && (
                        <Text style={{
                            color: "gray",
                            marginLeft: 15,
                            fontSize: 14
                        }}>{props.subTitle}</Text>
                    )}
                </View>
                <FontAwesomeIcon icon={faChevronRight} size={24} style={{color: "#4D4D4E"}}/>
            </View>
        </TouchableOpacity>
    )
}
