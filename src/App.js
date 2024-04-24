import { Routes, Route } from "react-router-dom";
import Home from "./main.js";
import PromptPage from "./pages/PromptPage/PromptPage";
import MockLinkedInPost from "./components/MockLinkedInPost/MockLinkedInPost.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/prompt" element={<PromptPage />} />
      <Route path="/mockpost" element={<MockLinkedInPost />} />
    </Routes>
  );
}

export default App;
