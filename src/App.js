import Routers from "./Routers";
import Home from "./pages/home/Home";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routers/>
    </BrowserRouter>

  );
}

export default App;
