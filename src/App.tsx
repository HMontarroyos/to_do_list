import Routes from "./routes";
import { ThemeProvider } from "styled-components";
import { Theme } from "../src/styles/Theme";

function App(): JSX.Element {
  return (
    <ThemeProvider theme={Theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
