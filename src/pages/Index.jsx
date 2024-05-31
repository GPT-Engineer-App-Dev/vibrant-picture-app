import { useState, useRef } from "react";
import { Container, Text, VStack, Button, Box } from "@chakra-ui/react";

const Index = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(timerRef.current);
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
    setTime(0);
  };

  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <Container
      centerContent
      maxW="container.md"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bg="#00AEEF"
    >
      <VStack spacing={4}>
        <Box
          bg="#FF3B30"
          color="white"
          p={4}
          borderRadius="md"
          fontSize="2xl"
          textAlign="center"
          width="200px"
        >
          {formatTime(time)}
        </Box>
        <Button colorScheme="teal" onClick={startTimer}>
          Start
        </Button>
        <Button colorScheme="teal" onClick={stopTimer}>
          Stop
        </Button>
        <Button colorScheme="teal" onClick={resetTimer}>
          Reset
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;