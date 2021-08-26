import Layout from "./components/Layout";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <p>Content</p>
      </Layout>
    </>
  );
}

export default App;
