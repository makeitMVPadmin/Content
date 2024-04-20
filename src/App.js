import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import LinkedInPage from "./utils/LinkedInPage";
import { LinkedInCallback } from "react-linkedin-login-oauth2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route exact path="/linkedin/callback" element={<LinkedInCallback/>} />
      <Route path="/linkedin" element={<LinkedInPage/>} />

    </Routes>
  );
}

export default App;
