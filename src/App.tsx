import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import SignUpPage from "./views/SignUpPage";
import Confirm from "./views/Confirm";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/confirm" element={<Confirm />} />
      </Routes>
    </Box>
  );
}

export default App;
