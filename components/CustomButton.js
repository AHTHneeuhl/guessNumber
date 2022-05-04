import { Pressable, StyleSheet, Text, View } from "react-native";

const CustomButton = ({ children }) => {
  const pressHandler = () => {
    console.log("Pressed");
  };

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={pressHandler}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={styles.ripple}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063C",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
  },
  ripple: {
    color: "#8E2F5C",
  },
  pressed: {
    opacity: 0.75,
  },
});
