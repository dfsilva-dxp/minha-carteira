import { ThemeProvider } from "styled-components";

import Layout from "./components/Layout";

import { GlobalStyles } from "./styles/global";
import { dark } from "./styles/themes/dark";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout>
        <p>Content</p>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
