import React from "react";
import { View, Text } from "react-native";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components/native";
import { StatusBar } from "expo-status-bar";

import { Login } from "./screens/Login/Login";

import{
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
}from "@expo-google-fonts/poppins";

import { DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular} from "@expo-google-fonts/dm-serif-display";

import COLORS from '../src/styles/theme';

const App: React.FC = () => {

    const[fontsLoad] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
        Poppins_800ExtraBold,
        DMSans_400Regular,
        DMSerifDisplay_400Regular,
    })

    if(!fontsLoad){
        return <AppLoading/>
    }

    return(
        <ThemeProvider theme={COLORS}>

            <StatusBar
                style="dark"
                translucent
                backgroundColor="transparent"
            />
            
            <View>
                <Login/>
            </View>

        </ThemeProvider>
    );
};

export default App;
