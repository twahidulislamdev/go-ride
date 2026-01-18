// src/App.jsx  (or App.tsx if you're using TypeScript)

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Layout
import RootLayout from './components/layouts/RootLayout';

// Pages
import Home from './components/pages/Home';
import Cars from './components/pages/Cars';
import Blog from './components/pages/Blog';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import LuxuryCarCategory from './components/pages/LuxuryCarCategory';
import SportsCarCategory from './components/pages/SportsCarCategory';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          {/* Home page (default route for the layout) */}
          <Route index element={<Home />} />

          {/* Main navigation pages */}
          <Route path="cars" element={<Cars />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          {/* Category pages */}
          <Route path="luxury-cars" element={<LuxuryCarCategory />} />
          <Route path="sports-cars" element={<SportsCarCategory />} />

          {/* Optional: 404 page that still shows the layout (navbar/footer) */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>

        {/* Pages that should NOT have RootLayout (example) */}
        {/* <Route path="login" element={<Login />} /> */}
        {/* <Route path="admin" element={<AdminDashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;