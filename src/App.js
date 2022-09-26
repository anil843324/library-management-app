import "./App.css";
import Navbar from "./components/Navbar";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import BookMarks from "./pages/BookMarks";
import MyBooks from "./pages/MyBooks";
function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bookmarks" element={<BookMarks />} />
        <Route path="/mybooks" element={<MyBooks />} />
      </Routes>
    </div>
  );
}

export default App;
