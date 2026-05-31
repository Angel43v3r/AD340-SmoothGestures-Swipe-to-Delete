import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function ForgotPasswordScreen() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [sent, setSent] = useState(false);

    const handleSend = () => {
        //this are all mock data
        setSent(true);
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <View style={styles.inner}>
                <Text style={styles.title}>SWIPE MAIL</Text>

                {sent ? (
                    // Success login (mocked)
                    <View style={styles.successBox}>
                        <Text style={styles.successTitle}>Check your inbox!</Text>
                        <Text style={styles.successText}>
                            We sent a password reset link to {email}
                        </Text>
                        <TouchableOpacity style={styles.button} onPress={() => router.back()}>
                            <Text style={styles.buttonText}>BACK TO SIGN IN</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    // Input state (mocked)
                    <>
                        <Text style={styles.subtitle}>
                            Enter your email and we'll send you a reset link
                        </Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            placeholderTextColor="#92394A80"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                        />

                        <TouchableOpacity style={styles.button} onPress={handleSend}>
                            <Text style={styles.buttonText}>SEND RESET LINK</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => router.back()}>
                            <Text style={styles.backLink}>Back to Sign in</Text>
                        </TouchableOpacity>
                    </>
                )}
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D1AAB8",
    },
    inner: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 32,
    },
    title: {
        fontSize: 36,
        fontWeight: "bold",
        textTransform: "uppercase",
        color: "#92394A",
        alignSelf: "center",
        marginBottom: 40,
    },
    subtitle: {
        fontSize: 14,
        color: "#92394A",
        textAlign: "center",
        marginBottom: 32,
        opacity: 0.8,
        lineHeight: 20,
    },
    input: {
        backgroundColor: "#F0C1CC",
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: 14,
        color: "#3A3737",
        marginBottom: 16,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
    button: {
        backgroundColor: "#92394A",
        borderRadius: 12,
        padding: 16,
        alignItems: "center",
        marginBottom: 16,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    buttonText: {
        color: "#F0C1CC",
        fontWeight: "bold",
        fontSize: 16,
        letterSpacing: 1.5,
    },
    backLink: {
        color: "#92394A",
        fontSize: 13,
        fontWeight: "bold",
        alignSelf: "center",
    },
    successBox: {
        alignItems: "center",
        gap: 16,
    },
    successTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#92394A",
    },
    successText: {
        fontSize: 14,
        color: "#92394A",
        textAlign: "center",
        opacity: 0.8,
        lineHeight: 20,
        marginBottom: 8,
    },
});