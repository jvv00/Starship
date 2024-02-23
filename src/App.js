import { ThemeProvider, theme } from "@chakra-ui/react";
import Routers from "./Routers";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routers />
    </ThemeProvider>
  );
}

export default App;
