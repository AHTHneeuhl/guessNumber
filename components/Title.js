import { StyleSheet, Text } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#DDB52F",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#DDB52F",
    padding: 12,
  },
});
