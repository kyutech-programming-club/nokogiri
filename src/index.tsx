import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
   <QueryClientProvider client={queryClient}>
     <BrowserRouter>
        <ChakraProvider>
          <App />
        </ChakraProvider>
     </BrowserRouter>
   </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
