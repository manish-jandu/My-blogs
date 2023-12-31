import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import IndexPage from "./pages/IndexPage";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import {UserContextProvider} from "./UserContext"
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreatePost/> }/>
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
