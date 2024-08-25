import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home';
import Housing from "./pages/Housing";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>  
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/a-propos" element={<About />}/>
        <Route path="/location/:id" element={<Housing />}/>
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;
