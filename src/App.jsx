import { View, Text } from "react-native";
import { style } from "./style";

export default function App() {
    return (
        <View style={style.container}>
            <Text style={style.title}>Meus Estudos</Text>
            <Text style={style.subtitle}>Carregando...</Text>
        </View>
    );
}