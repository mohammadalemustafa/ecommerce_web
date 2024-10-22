import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Public from "./routes/Public";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgotpass from "./pages/Forgotpassword";
import ResetPass from "./pages/Resetpass";
import PageNoTFound from "./pages/Resetpass";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Invoice from "./pages/Invoice";
function App() {
  const [count, setCount] = useState(0);
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Public element={<Home />} />} />
      <Route
        path="/contact"
        element={<Public element={<Contact></Contact>} />}
      />
      <Route path="/login" element={<Public element={<Login></Login>} />} />
      <Route
        path="/register"
        element={<Public element={<Register></Register>} />}
      />
      <Route
        path="/forgotpass"
        element={<Public element={<Forgotpass></Forgotpass>} />}
      />
      <Route
        path="/resetpass"
        element={<Public element={<ResetPass></ResetPass>} />}
      />
      <Route
        path="*"
        element={<Public element={<PageNoTFound></PageNoTFound>} />}
      />
      <Route path="about" element={<Public element={<About></About>} />} />
      <Route
        path="/privacy"
        element={<Public element={<PrivacyPolicy></PrivacyPolicy>} />}
      />
      <Route
        path="/TemsAndCondition"
        element={<Public element={<TermsAndConditions></TermsAndConditions>} />}
      />
      <Route
        path="/invoice"
        element={<Public element={<Invoice></Invoice>} />}
      />
    </Routes>
  );
}
export default App;
