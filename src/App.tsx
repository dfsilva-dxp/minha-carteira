import { ThemeProvider } from "styled-components";

import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";

import { GlobalStyles } from "./styles/global";
import { dark } from "./styles/themes/dark";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout>
        <Dashboard />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
