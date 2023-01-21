import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Header from "./parts/Header";
import Content from "./Content";
import Footer from "./parts/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import SignUpPage from "./views/SignUpPage";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Box>
  );
}

export default App;
