import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
