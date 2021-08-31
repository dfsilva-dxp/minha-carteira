import { ThemeProvider } from "styled-components";

import Layout from "./components/Layout";
import Transactions from "./pages/Transactions";

import { GlobalStyles } from "./styles/global";
import { light } from "./styles/themes/light";

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Layout>
        <Transactions />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
