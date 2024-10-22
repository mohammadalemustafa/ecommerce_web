import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Public from "./routes/Public";
import Home from "./pages/Home";
import Shop from "./pages/shop";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Public element={<Home />} />} />
      <Route path="/shop" element={<Public element={<Shop />} />} />
      <Route path="/about" element="" />
    </Routes>
  );
}

export default App;
