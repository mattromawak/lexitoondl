import { BrowserRouter, Routes, Route } from "react-router-dom";
import Download from "./pages/Download";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Download />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;