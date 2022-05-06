import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Colors from "./theme/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = () => {
    setGameIsOver(true);
  };

  const renderScreen = () => {
    if (gameIsOver && userNumber) {
      return <GameOverScreen />;
    }

    if (userNumber) {
      return (
        <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
      );
    }

    return <StartGameScreen onPickNumber={pickedNumberHandler} />;
  };

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/adaptive-icon.png")}
        resizeMode="cover"
        imageStyle={styles.styledImage}
        style={styles.rootScreen}
      >
        <SafeAreaView style={styles.rootScreen}>{renderScreen()}</SafeAreaView>
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
