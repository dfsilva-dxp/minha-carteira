import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import TransactionContextProvider from "./contexts/TransactionContext";

import Layout from "./components/Layout";
import AppRoutes from "./routes";

import { GlobalStyles } from "./styles/global";
import { light } from "./styles/themes/light";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <TransactionContextProvider>
          <Layout>
            <AppRoutes />
          </Layout>
        </TransactionContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
