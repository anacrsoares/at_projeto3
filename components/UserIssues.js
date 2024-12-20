import React, { use, useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { fetchUserIssues } from "../api/github";

const UserIssues = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const handleIssues = async () => {
      try {
        const response = await fetchUserIssues(token);
        const dataJSON = await response.json();
        return dataJSON;
      } catch (error) {
        console.error(error);
      }
    };

    handleIssues();
  }, [token]);
};

export default UserIssues;

const styles = StyleSheet.create({
  issueContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  issueTitle: {
    fontWeight: "bold",
  },
  issueBody: {
    marginTop: 5,
  },
  errorContainer: {
    padding: 20,
    alignItems: "center",
  },
  errorText: {
    color: "red",
  },
});
