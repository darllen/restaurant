import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cardapio from "./view/Cardapio";
import Inicio from "./view/Inicio";
import Pratos from "./view/Pratos";
import Espaco from "./view/Espaco";
import Delivery from "./view/Delivery";
import Sobre from "./view/Sobre";
import Login from "./view/Login"
import Cadastro from './view/Cadastro';
import Home from './view/Home';
import NovoContato from './view/NovoContato';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="cardapio" element={<Cardapio />} />
        <Route path="pratos-da-estacao" element={<Pratos />} />
        <Route path="nosso-espaco" element={<Espaco />} />
        <Route path="faq-delivery" element={<Delivery />} />
        <Route path="sobre-nos" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="home" element={<Home />} />
        <Route path="novo-contato" element={<NovoContato />} />
        <Route path="/novo-contato/:id" element={<NovoContato />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
