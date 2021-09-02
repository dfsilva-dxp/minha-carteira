import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import TransactionContextProvider from "./contexts/TransactionContext";

import Layout from "./components/Layout";
import AppRoutes from "./routes";

import { GlobalStyles } from "./styles/global";
import { dark } from "./styles/themes/dark";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={dark}>
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
