import { FlatList, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
export default function HomeScreen() {
    const [nomeDoProduto, setNomeDoProduto] = useState("");
    const [produtos, setProdutos] = useState([])
    async function queryProdutos(nomeDoProduto = null) {
        try {
            const produtosRef = collection(db, "produto");
            const queryProdutos = query(produtosRef, where("NomeDoProduto", "LIKE", nomeDoProduto));
            // execute query
            const querySnapshot = await getDocs(queryProdutos);
            const produtosTemp = [];
            querySnapshot.forEach(
                (doc) => {
                    produtosTemp.push(doc.data());
                }
            );
            setProdutos(produtosTemp);
        } catch (error) { console.log(error); }
    }
    useEffect(() => {
        queryProdutos(nomeDoProduto);
    }, [nomeDoProduto])
    /**
     * Criar um TextInput que faça buscas no banco e exiba em um Flatlist
     * Lembre-se de usar a expressão "utilizando a Web Version 9 do Firebase"
     */
    return (
        <View>
            <Text>Home Screen</Text>
            <TextInput
                label="Nome do Produto"
                value={nomeDoProduto}
                onChangeText={setNomeDoProduto}
            />
            <FlatList
                data={produtos}
                renderItem={({ item }) => <Text>{item.NomeDoProduto}</Text>}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}