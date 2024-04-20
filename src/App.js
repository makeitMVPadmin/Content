import { Routes, Route } from "react-router-dom";
import LinkedInPage from "./utils/LinkedInPage";
import { LinkedInCallback } from "react-linkedin-login-oauth2";
import Home from "./main.js"
import PromptPage from "./pages/PromptPage/PromptPage";

function App() {
  return (
    <Routes>
      <Route exact path="/linkedin" element={<LinkedInCallback/>} />
      {/* <Route path="/" element={<LinkedInPage/>} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/prompt" element={<PromptPage />} />
    </Routes>
  );
}

export default App;
