import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignIn from "./pages/SignIn";

import Home from "./pages/Home";
function App() {
  return (
      <BrowserRouter>
        <div className="app-shell">
          <Navbar />
          <main className="page-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<SignIn/>} />
           </Routes>
          </main>
        </div>
      </BrowserRouter>
  );
}

export default App;
