import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/UserProfile";
import Setting from "./pages/Setting";
import UserProfile from "./pages/UserProfile";
import Help from "./pages/Help";
import Workspace from "./pages/Workspace";
import MyAccount from "./pages/MyAccount";

function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/help" element={<Help />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/workspace" element={<Workspace />} />
          <Route path="/MyAccount" element={<MyAccount />} />
          <Route path="/settings" element={<Setting />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
