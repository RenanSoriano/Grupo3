import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 20,
    left: 0,
    right: 0,
  },
  backButton: {
    position: "absolute",
    left: 20,
    padding: 10,
    backgroundColor: "#f44336",
    borderRadius: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  profileContainer: {
    alignItems: "center",
    marginTop: 100, // Ajusta a posição da foto no centro da tela
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  separator: {
    width: "80%",
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
  profileText: {
    fontSize: 16,
    marginVertical: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 10,
    paddingVertical: 5,
    fontSize: 16,
    width: "80%",
    textAlign: "center",
  },
  editButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});