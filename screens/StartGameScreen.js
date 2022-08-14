import { useState } from "react";
import {
  Alert,
  useWindowDimensions,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

import CustomButton from "../components/common/CustomButton";
import InstructionText from "../components/common/InstructionText";
import Title from "../components/common/Title";
import Card from "../components/ui/Card";
import Colors from "../theme/colors";

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const { height } = useWindowDimensions();

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

    onPickNumber(chosenNumber);
  };

  const marginTopD = height < 375 ? 35 : 100;

  return (
    <View style={[styles.screenContainer, { marginTop: marginTopD }]}>
      <Title>Guess Number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
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
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: "center",
  },
  styledInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
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
