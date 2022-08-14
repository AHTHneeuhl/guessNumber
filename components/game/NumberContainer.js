import { StyleSheet, Text, View, Dimensions } from "react-native";

import Colors from "../../theme/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: deviceWidth < 375 ? 12 : 24,
    margin: deviceWidth < 375 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontFamily: "open-sans-bold",
    fontSize: deviceWidth < 375 ? 28 : 36,
  },
});
