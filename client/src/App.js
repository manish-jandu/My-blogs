import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import Layout from "./components/Layout";
import IndexPage from "./pages/IndexPage";
import Login from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<Login/>} />
      </Route>
    </Routes>
  );
}

export default App;
