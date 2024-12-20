import { Image, Text, View, StyleSheet } from "react-native";

const UserInfo = ({ user }) => {
  console.log(user);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Crachá do Usuário</Text>
      <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Username: </Text>
        <Text style={styles.info}>{user.login}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Name: </Text>
        <Text style={styles.info}>{user.name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Public Repositories: </Text>
        <Text style={styles.info}>{user.public_repos}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Private Repositories: </Text>
        <Text style={styles.info}>{user.total_private_repos}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Bio: </Text>
        <Text style={styles.info}>{user.bio}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Location: </Text>
        <Text style={styles.info}>{user.location}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Last Appearance: </Text>
        <Text style={styles.info}>
          {new Date(user.updated_at).toISOString().split("T")[0]}
        </Text>
      </View>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#f5f5f5",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    width: "90%",
    maxHeight: "90%",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  infoContainer: {
    flexDirection: "row",
    marginBottom: 6,
  },
  label: {
    fontWeight: "bold",
  },
  info: {
    flex: 1,
    flexWrap: "wrap",
  },
});
