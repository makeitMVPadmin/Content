import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import LinkedInPage from "./utils/LinkedInPage";
import { LinkedInCallback } from "react-linkedin-login-oauth2";


function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} />  */}
      <Route exact path="/linkedin" element={<LinkedInCallback/>} />
      <Route path="/" element={<LinkedInPage/>} />

    </Routes>
  );
}

export default App;
