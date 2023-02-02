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

function App() {
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
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Home />}></Route>
          {/* </Route> */}
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<Home />}></Route>
        </Route>
        <Route path="/dashboard" element={<SharedDashboard />}>
          <Route index element={<DashboardView />} />
        </Route>
      </>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
