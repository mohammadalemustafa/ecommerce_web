import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Public from "./routes/Public";
import Home from "./pages/Home";
import MyProfile from "./pages";
import BlogCatGrid from "./components/BlogCategoryGrid";
import SinglePostRight from "./components/SinglePostRight/Index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Public element={<Home />} />} />
      <Route path="/myprofile" element={<Public element={<MyProfile />} />} />
      <Route path="/bcgrid" element={<Public element={<BlogCatGrid/>} />} />
      <Route path="/singlepost" element={<Public element={<SinglePostRight/>} />} />
    </Routes>
  );
}

export default App;
