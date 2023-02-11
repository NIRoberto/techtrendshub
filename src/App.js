import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
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
import Analytics from "./pages/dashboard/Analytics";
import Blogs from "./pages/dashboard/Blogs";
import Users from "./pages/dashboard/Users";
import Queries from "./pages/dashboard/Queries";
import News from "./pages/dashboard/News";
import Create from "./pages/dashboard/Create";
import ProtectRoute from "./context/ProtectRoute";
// import { AppContext } from "./context/AppProvider";
import TrackAuth from "./context/TrackAuth";
import "./axios/global";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<SharedComponent />}>
          <Route index element={<Home />}></Route>
          {/* <Route path="blog" element={<BlogShared />}> */}
          <Route path="ai" element={<Ai />}></Route>
          <Route path="ai/:aiId" element={<SingleBlog />}></Route>
          <Route path="/cloud" element={<Cloud />}></Route>
          <Route path="cloud/:cloudId" element={<SingleBlog />}></Route>
          <Route path="/devops" element={<DevOps />}></Route>
          <Route path="devops/:devopsId" element={<SingleBlog />}></Route>
          <Route path="/blockchain" element={<BlockChain />}></Route>
          <Route path="blockchain/:aiId" element={<SingleBlog />}></Route>
          <Route
            path="login"
            element={
              <TrackAuth>
                <Login />
              </TrackAuth>
            }
          />
          <Route
            path="register"
            element={
              <TrackAuth>
                <Register />
              </TrackAuth>
            }
          />
          <Route path="*" element={<Home />}></Route>
          {/* </Route> */}
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<Home />}></Route>
        </Route>
        <Route
          path="dashboard"
          element={
            <ProtectRoute>
              <SharedDashboard />
            </ProtectRoute>
          }
        >
          <Route index path="" element={<Analytics />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="create" element={<Create />} />
          <Route path="users" element={<Users />} />
          <Route path="queries" element={<Queries />} />
          <Route path="letters" element={<News />} />
          <Route path="*" element={<DashboardView />} />
        </Route>{" "}
      </>
    )
  );

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
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
        <RouterProvider router={router} />
      )}
    </div>
  );
}

export default App;
