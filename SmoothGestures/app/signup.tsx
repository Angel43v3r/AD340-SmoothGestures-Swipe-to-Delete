import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function SignupScreen() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignup = () => {
        // Go to HomeScreen
        router.replace("/(tabs)");
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <View style={styles.inner}>
                <Text style={styles.title}>SWIPE MAIL</Text>
                <Text style={styles.subtitle}>Create an account</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Full Name"
                    placeholderTextColor="#92394A80"
                    autoCapitalize="words"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#92394A80"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#92394A80"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    placeholderTextColor="#92394A80"
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />

                <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
                    <Text style={styles.signupButtonText}>CREATE ACCOUNT</Text>
                </TouchableOpacity>

                <View style={styles.loginRow}>
                    <Text style={styles.loginText}>Already have an account? </Text>
                    <TouchableOpacity onPress={() => router.back()}>
                        <Text style={styles.loginLink}>Sign in</Text>
                    </TouchableOpacity>
                </View>
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
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: "#92394A",
        alignSelf: "center",
        marginBottom: 40,
        opacity: 0.8,
    },
    input: {
        backgroundColor: "#F0C1CC",
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: 14,
        color: "#3A3737",
        marginBottom: 12,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
    signupButton: {
        backgroundColor: "#92394A",
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: "center",
        marginTop: 8,
        marginBottom: 24,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    signupButtonText: {
        color: "#F0C1CC",
        fontWeight: "bold",
        fontSize: 16,
        letterSpacing: 1.5,
    },
    loginRow: {
        flexDirection: "row",
        justifyContent: "center",
    },
    loginText: {
        color: "#92394A",
        fontSize: 13,
        opacity: 0.8,
    },
    loginLink: {
        color: "#92394A",
        fontSize: 13,
        fontWeight: "bold",
    },
});