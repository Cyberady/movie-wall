import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aditya from "./pages/Aditya";
import Siddhi from "./pages/Siddhi";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Aditya />} />
        <Route path="/siddhi" element={<Siddhi />} />
      </Routes>
    </BrowserRouter>
  );
}