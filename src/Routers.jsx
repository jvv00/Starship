import { Route, Routes } from "react-router-dom";
// import Layout from "./assets/components/layout/Layout";
import Home from "./pages/home/Home";
import Artist from "./pages/artist/Artist";
import Company from "./pages/company/Company";
import Menu from "./pages/menu/Menu";
import NewRelease from "./pages/newrelease/NewRelease";
import News from "./pages/news/News";

const Routers = () => {
  return (
      <Routes>
        <Route exat path= '/' Component={Home}></Route>
        <Route path='/artist' component={Artist}/>
        <Route path='/company' component={Company}/>
        <Route path='/menu' component={Menu}/>
        <Route path='/newrelease' component={NewRelease}/>
        <Route path='/news' component={News}/>
      </Routes>
  );
};

export default Routers;
