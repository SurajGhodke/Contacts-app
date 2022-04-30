import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contacts from "./components/Contacts";
import Messages from "./components/Messages";
import ContactDetails from "./components/ContactDetails";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Contacts />} />
          <Route path="messages" element={<Messages />} />
          <Route path="contact-details/:id" element={<ContactDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
