import { useState } from "react";
import "./App.css";
import {
  Heading,
  Box,
  Input,
  Flex,
  Text,
  Button,
  Stack,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@chakra-ui/react";
import { useRef } from "react";

function App() {
  let [counter, setCounter] = useState(0);
  let refInput = useRef(null);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "lightgoldenrodyellow",
      }}
    >
      <Box
        textAlign={"center"}
        width={"fit-content"}
        bg={"lightskyblue"}
        padding={20}
        marginTop={2}
        marginBottom={2}
        marginLeft={10}
        marginRight={10}
      >
        <Card align="center">
          <CardHeader>
            <Heading
              size={"4xl"}
              as={"h1"}
              color={"grey"}
              textDecor={"underline"}
            >
              COUNTER APPLICATION
            </Heading>
          </CardHeader>
          <CardBody>
            <Flex direction={"column"}>
              <br />
              <br />
              <Text fontSize="5xl"> value : {counter}</Text>
              <Input
                placeholder="enter a number"
                type="number"
                onChange={() => {
                  console.log(refInput.current.value);
                  setCounter(Number(refInput.current.value));
                }}
                margin={"auto"}
                padding={8}
                marginTop={20}
                width={300}
                fontSize={30}
                ref={refInput}
              />
              <Stack
                direction="row"
                spacing={4}
                align="center"
                margin={"auto"}
                marginTop={10}
              >
                <Button
                  bg={"purple"}
                  color={"white"}
                  variant="solid"
                  padding={6}
                  onClick={() => {
                    setCounter(Number(counter) + 1);
                    refInput.current.value = "";
                  }}
                >
                  Increment
                </Button>
                <Button
                  bg={"blue"}
                  color={"white"}
                  variant="solid"
                  padding={6}
                  onClick={() => {
                    setCounter(Number(counter) - 1);
                    refInput.current.value = "";
                  }}
                >
                  Decrement
                </Button>
              </Stack>
            </Flex>
          </CardBody>
          <CardFooter>
            <Button colorScheme="blue">Result : {counter}</Button>
          </CardFooter>
        </Card>
      </Box>
    </div>
  );
}

export default App;
