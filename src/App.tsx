import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useRoutes,
} from "react-router-dom";
import "./App.css";
import Error404 from "./Pages/Error/Error";
import Homepage from "./Pages/Homepage/Homepage";
import Login from "./Pages/Login-Page/Login-Page";
import Picture from "./Pages/Picture-Page/Picture-Page";
import Profile from "./Pages/Profile-Page/Profile-Page";
import Signup from "./Pages/Signup-Page/Signup-Page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/picture" element={<Picture />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
