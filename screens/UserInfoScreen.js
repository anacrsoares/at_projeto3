import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import UserInfo from "../components/UserInfo";
import { fetchUserInfo, fetchUserIssues } from "../api/githubApi";
import { useState, useEffect } from "react";

const UserInfoScreen = ({ route }) => {
  const { token } = route.params;
  const [user, setUser] = useState(null);
  const [issues, setIssues] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [errorIss, setErrorIss] = useState(null);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const userInfo = await fetchUserInfo(token);
        setUser(userInfo);
      } catch (err) {
        setError("Failed to fetch user information.");
      } finally {
        setIsLoading(false);
      }
    };

    getUserInfo();
  }, [token]);

  useEffect(() => {
    const getUserIssues = async () => {
      try {
        const userIssues = await fetchUserIssues(token);
        setIssues(userIssues);
        console.log(userIssues);
      } catch (err) {
        setErrorIss("Failed to fetch user's issues.");
      }
    };

    getUserIssues();
  }, [token]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>{error}</Text>
      </View>
    );
  }

  if (errorIss) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>{errorIss}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {user ? (
        <UserInfo user={user} />
      ) : (
        <Text style={styles.message}>
          Please log in to see your information.
        </Text>
      )}
    </View>
  );
};

export default UserInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  message: {
    fontSize: 18,
    textAlign: "center",
  },
});
