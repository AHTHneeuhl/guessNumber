import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Colors from "./theme/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [loaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = (numberOfRounds) => {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  };

  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  const renderScreen = () => {
    if (gameIsOver && userNumber) {
      return (
        <GameOverScreen
          userNumber={userNumber}
          roundsNumber={guessRounds}
          onStartNewGame={startNewGameHandler}
        />
      );
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
