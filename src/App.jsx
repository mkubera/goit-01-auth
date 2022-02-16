import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
  // useNavigate,
  // useLocation,
  // Navigate,
  // Outlet,
} from "react-router-dom";
import "./App.css";
import Contacts from "./components/Contacts";
import HomePublic from "./components/HomePublic";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Register from "./components/Register";
import RequireAuth from "./components/RequireAuth";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePublic />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/contacts"
            element={
              <RequireAuth>
                <Contacts />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
