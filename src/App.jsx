import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./components/layouts/RootLayout";
import Home from "./components/pages/Home";
import Cars from "./components/pages/Cars";
import LuxuryCarCategory from "./components/pages/LuxuryCarCategory";
import SportsCarCategory from "./components/pages/SportsCarCategory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/luxuryCarCategory" element={<LuxuryCarCategory />} />
            <Route path="/sportsCarCategory" element={<SportsCarCategory />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
