import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./assets/components/layout/Layout";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
