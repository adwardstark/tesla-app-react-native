import React, { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFan, faKey, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons'

export default function Controls() {
    const [isLocked, setIsLocked] = useState(faLock)
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 175
        }}>
            <TouchableOpacity style={controlButtonStyle}>
                <FontAwesomeIcon icon={faFan} size={24} style={{color: "white"}}/>
            </TouchableOpacity>
            <TouchableOpacity style={controlButtonStyle}>
                <FontAwesomeIcon icon={faKey} size={24} style={{color: "white"}}/>
            </TouchableOpacity>
            <TouchableOpacity style={controlButtonStyle} onPress={() => {
                isLocked === faLock ? setIsLocked(faUnlock) : setIsLocked(faLock)
            }}>
                <FontAwesomeIcon icon={isLocked} size={24} style={{color: "white"}}/>
            </TouchableOpacity>
        </View>
    )
}

const controlButtonStyle = {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 50,
    padding: 18,
    marginLeft: 25
}
