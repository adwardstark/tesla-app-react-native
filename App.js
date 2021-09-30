import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, View, ImageBackground } from 'react-native';
import CarItem from './components/CarItem';

export default function App() {
  const styleTypes = ['default', 'dark-content', 'light-content'];
  return (
    <View style={{ width: "100%", height: "100%"}}>
      <ImageBackground source={require("./assets/background.png")} 
            style={{
                width: "100%",
                height: "100%",
                resizeMode: "cover",
                position: "absolute"
            }}/>
      <SafeAreaView>
      <StatusBar style="inverted"/>
      <CarItem/>
      </SafeAreaView>
    </View>
  );
}