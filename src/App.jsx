import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import ReserveTable from "./pages/ReserveTable";
import About from "./pages/About";
import Events from "./pages/Events";
import GiftCards from "./pages/GiftCards";
import JoinTeam from "./pages/JoinTeam";
import Memberships from "./pages/Memberships";
import TermsPrivacy from "./pages/TermsPrivacy";
import Notice from "./pages/Notice";

// CSS
import "./assets/CSS/variables.css";
import "./assets/CSS/utilities.css";

export default function App() {
  return (
    <Router>
      <div className="app-shell">
        <Header />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reserve" element={<ReserveTable />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gift-cards" element={<GiftCards />} />
            <Route path="/join-team" element={<JoinTeam />} />
            <Route path="/memberships" element={<Memberships />} />
            <Route path="/terms-privacy" element={<TermsPrivacy />} />
            <Route path="/notice" element={<Notice />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
}