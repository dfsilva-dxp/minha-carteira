import { ThemeProvider } from "styled-components";

import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";

import { GlobalStyles } from "./styles/global";
import { light } from "./styles/themes/light";

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Layout>
        <Dashboard />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
