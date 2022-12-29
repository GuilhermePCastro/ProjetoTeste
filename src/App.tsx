import React from "react";
import { View, Text } from "react-native";


const App: React.FC = () => {
    return(
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>

            <Text>Meu App de Teste</Text>
        </View>
    );
};

export default App;
