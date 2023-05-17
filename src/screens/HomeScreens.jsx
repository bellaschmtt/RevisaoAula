
import { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";
import { Query, collection, getDocs, where } from "firebase/firestore";
import { FlatList } from "react-native-web";
import { styles } from "../utils/styles";
// import { getDocs, where, query } from "firebase/firestore";


export default function HomeScreen() {
    const [produtos, setProdutos] = useState([]);
    const [nomeDoProduto, setNomeDoProduto] = useState("");
    // talvez tenha erro com os nome do banco de dados
    async function queryProdutos(NomeDoProduto = null){
        try{
            const produtosRef = collection(db, "produtos");
            const query = query(produtosRef, where("NomeDoProduto", "==", "uva"));
            // execute query
            const querySnapshot = await getDocs(queryProdutos); 
            const produtos = [];
            querySnapshot.forEach(
                (doc) => {
                    produtos.push(doc.data());
                }
            );
            setProdutos(produtos);
        } catch (error) { console.log(error); }
    }


    return (
       <View style={styles.container}>
            <Text>Lista</Text>
            <TextInput>
                
            </TextInput>
            <Button>
                
            </Button>
            <FlatList
                data={produtos}
                renderItem={({item}) => <Text>{item.NomeDoProduto}</Text>}
                KeyExtractor={(item) => item.id}
            />
       </View>
    )
}