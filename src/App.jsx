import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Public from "./routes/Public";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
function App() {
  const [count, setCount] = useState(0);
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Public element={<Home />} />} />
      <Route path="/contact" element={<Public element={<Contact></Contact>} />} />
      <Route path="/login" element={<Public element={<Login></Login>} />} />
    </Routes>
  );
}
export default App;
