import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cardapio from "./pages/Cardapio";
import Home from "./pages/Home";
import Pratos from "./pages/Pratos";
import Espaco from "./pages/Espaco";
import Delivery from "./pages/Delivery";
import Sobre from "./pages/Sobre";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cardapio" element={<Cardapio />} />
        <Route path="pratos-da-estacao" element={<Pratos />} />
        <Route path="nosso-espaco" element={<Espaco />} />
        <Route path="faq-delivery" element={<Delivery />} />
        <Route path="sobre-nos" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
