import React from 'react'
import { View, ScrollView } from 'react-native'
import Battery from './Battery'
import Controls from './Controls'
import Header from './Header'
import Menu from './Menu'

export default function CarItem() {
    return (
        <View style={{ width: "100%", height: "100%"}}>
            <Header />
            <Battery />
            <ScrollView style={{
                paddingTop: 20,
                paddingLeft: 20,
                paddingRight: 20
            }}>
            <Controls />
            <Menu />
        </ScrollView>
        </View>
    )
}
