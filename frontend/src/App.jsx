import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import GlobalStyle from "./styles/globalStyles";

const App = () => {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
