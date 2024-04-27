import { Routes, Route } from "react-router-dom";
import Home from "./main.js"
import PromptPage from "./pages/PromptPage/PromptPage";
import LinkedInPage from "./utils/linkedIn";
import { LinkedInCallback } from "react-linkedin-login-oauth2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/prompt" element={<PromptPage />} />
      <Route exact path="/linkedin/callback" element={<LinkedInCallback/>} />
      <Route path="/linkedin" element={<LinkedInPage/>} />
    </Routes>
  );
}

export default App;
