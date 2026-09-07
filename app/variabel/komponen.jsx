import React from 'react';
import { View, Text, Button, TextInput, Image } from 'react-native';

export default function App() {
    return (
        <View style= {{ padding: 20 }}>
            <Image source={require('../../assets/logo.png')} style={{width: 100, height: 100}} />
            <Text>Selamat datang di React Native</Text>
            <TextInput placeholder="Masukkan Nama..." style={{borderWidth: 1, marginTop: 10}}></TextInput>
            <Button title="Submit" onPress= {() => alert("Data dikirim")} />
        </View>
    );
}