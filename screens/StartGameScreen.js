import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import CustomButton from "../components/CustomButton";

const StartGameScreen = () => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHanlder = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Number should be between 1 and 99.", [
        { text: "Okey", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.styledInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        value={enteredNumber}
        onChangeText={numberInputHanlder}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <CustomButton onPress={resetInputHandler}>Reset</CustomButton>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton onPress={confirmInputHandler}>Confirm</CustomButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#3B021F",
    elevation: 4,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  styledInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: "#DDB52F",
    borderBottomWidth: 2,
    color: "#DDB53F",
    marginVertical: 8,
    fontWeight: "bold",
    width: 80,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
