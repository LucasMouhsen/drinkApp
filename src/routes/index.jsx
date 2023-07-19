import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound/notFound";
import SignIn from "../pages/User/SignIn";
import SignUp from "../pages/User/SignUp";


export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </Router>
  );
}
