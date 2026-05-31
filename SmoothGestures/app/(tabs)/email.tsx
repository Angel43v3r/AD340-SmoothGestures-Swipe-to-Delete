import { FlatList, StyleSheet, Text, View } from "react-native";
import sampleData, { Item } from "../../data/sampleData";
import SwipeItem from "../../components/swipeItem";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useState } from "react";

export default function EmailScreen() {
    const [emails, setEmails] = useState<Item[]>(sampleData);

    const handleDelete = (id: string) => {
        setEmails((prevEmails) => prevEmails.filter((item) => item.id !== id));
    };

    return (
        <GestureHandlerRootView style={style.gesture}>
            <View style={style.container}>
                <Text style={style.title}>MY EMAIL</Text>
                <FlatList<Item>
                    data={emails}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <SwipeItem item={item} onDelete={handleDelete} />}

                    contentContainerStyle={style.card}
                />
            </View>
        </GestureHandlerRootView>
    );
}

const style = StyleSheet.create({
    card: {
        backgroundColor: '#F0C1CC',
        padding: 4,
    },
    container: {
        flex: 1,
        backgroundColor: '#D1AAB8',
        paddingTop: 80,
    },
    gesture: {
        flex: 1,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        alignSelf: 'center',
        padding: 12,
        color: '#92394A'
    }
})