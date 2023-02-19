import {
  // createBrowserRouter,
  // createRoutesFromElements,
  Route,
  // RouterProvider,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import DashboardView from "./pages/DashboardView";
import SharedComponent from "./components/SharedComponent";
import SharedDashboard from "./components/SharedDashboard";
import Ai from "./pages/Ai";
import BlockChain from "./pages/BlockChain";
import Cloud from "./pages/Cloud";
import Contact from "./pages/Contact";
import DevOps from "./pages/DevOps";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SingleBlog from "./pages/SingleBlog";
import { useState } from "react";
import { useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";

// import { AppContext } from "./context/AppProvider";
import TrackAuth from "./context/TrackAuth";
import "./axios/global";
import AnimateRoutes from "./components/AnimateRoutes";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // const router = createBrowserRouter(createRoutesFromElements(<></>));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  // const location = useLocation();
  return (
    <div className="App">
      {isLoading ? (
        <div className="loader">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#ff9908"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      ) : (
        <Router>
          <AnimateRoutes />
        </Router>
      )}
    </div>
  );
}

export default App;
