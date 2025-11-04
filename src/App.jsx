import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./components/layouts/RootLayout";
import Home from "./components/pages/Home";
import Cars from "./components/pages/Cars";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<Cars />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
