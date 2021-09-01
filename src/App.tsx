import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Layout from "./components/Layout";
import AppRoutes from "./routes";

import { GlobalStyles } from "./styles/global";
import { light } from "./styles/themes/light";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <Layout>
          <AppRoutes />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
