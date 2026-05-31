import { router } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';

export default function LoadingScreen() {
    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace('/(tabs)');
        }, 3000); //3 sec

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/images/SwipeMail.png")}
                style={styles.image}
            />
            <Text style={styles.title}>SWIPE MAIL</Text>
            <Text>One email, one story, one swipe at a time</Text>

            <ActivityIndicator
                size="large"
                color="#413f3d"
                style={styles.loader}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        backgroundColor: '#D1AAB8',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 2,
        borderColor: '#F0C1CC',
        resizeMode: 'contain',
    },
    loader: {
        marginTop: 32,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#92394A',
    }
})