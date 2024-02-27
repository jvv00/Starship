import { ThemeProvider, theme } from "@chakra-ui/react";
import Routers from "./Routers";
import Home from "./pages/home/Home";
import Company from "./pages/company/Company";

function App() {
  return (
    // <ThemeProvider theme={theme}>

    //   <Routers />
    // </ThemeProvider>
    <Home />
    // <Company />
  );
}

export default App;
