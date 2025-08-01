import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, Menu } from "./pages";
import { Auth } from "./pages";
import { Orders } from "./pages";
import Header from "./components/shared/Header";
import Tables from "./pages/Tables";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/menu" element={<Menu />} />

          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
