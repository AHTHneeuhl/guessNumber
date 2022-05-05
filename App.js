import { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  const renderScreen = () => {
    if (userNumber) {
      return <GameScreen />;
    } else {
      return <StartGameScreen onPickNumber={pickedNumberHandler} />;
    }
  };

  return (
    <LinearGradient colors={["#4E0329", "#DDB52F"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/adaptive-icon.png")}
        resizeMode="cover"
        imageStyle={styles.styledImage}
        style={styles.rootScreen}
      >
        {renderScreen()}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  styledImage: {
    opacity: 0.15,
  },
});
