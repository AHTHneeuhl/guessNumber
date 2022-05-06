import { StyleSheet, Text } from "react-native";

import Colors from "../../theme/colors";

const InstructionText = ({ children, styledProps }) => {
  return <Text style={[styles.instructionText, styledProps]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
