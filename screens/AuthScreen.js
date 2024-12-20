import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { verifyToken } from "../api/githubApi";

const AuthScreen = ({ navigation }) => {
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const isValid = await verifyToken(token);
      if (isValid) {
        navigation.navigate("UserInfoScreen", { token });
      } else {
        setError("Invalid token. Please check your token.");
      }
    } catch (err) {
      setError("Authentication failed. Please check your token.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GitHub Authentication</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your GitHub token"
        value={token}
        onChangeText={setToken}
        secureTextEntry
      />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};
export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  error: {
    color: "red",
    marginBottom: 12,
    textAlign: "center",
  },
});
