import React, { useState, useEffect, useCallback } from "react";
import background from '../assets/img/background.jpg';
import logo from '../assets/img/logo.png';
import { useNavigate } from 'react-router-dom';
import { CImage } from '@coreui/react';
import axios from 'axios';
import Fornecedor from './components/Fornecedor';
import { cilPlus } from '@coreui/icons';
import CIcon from "@coreui/icons-react";

export default function Home() {
    const ENDERECO_API = 'http://localhost:3000/contatos/';
    const navigate = useNavigate();
    const [getContatos, setContatos] = useState([]);

    const getAllContato = useCallback(() => {
        axios.get(ENDERECO_API)
            .then((response) => {
                setContatos(response.data);
            })
            .catch((error) => {
                console.error('Erro na requisição:', error);
                navigate("login");
            });
    }, [navigate]);

    useEffect(() => {
        getAllContato();
    }, [getAllContato]);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', backgroundImage: `url(${background})`, backgroundSize: 'cover', height: '100vh', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width:'100%' }}>
                <div className="cui-alinha" style={{ marginLeft: '20%' }}>
                    <CImage align="center" rounded thumbnail src={logo} width={250} height={125} />
                    <div style={{ textTransform: 'uppercase', textAlign: 'center', marginTop: '7%', letterSpacing: 3, fontSize: '1em' }}> comida feita com ingredientes à<br/> base de plantas e muito amor </div>
                </div>
                <div style={{ backgroundColor: 'var(--cui-gray-100)', width: '30vw', height: '100vh', padding: '1.5% 1.5% 3% 1.5%', display: 'flex', flexDirection: 'column', marginLeft: 'auto', overflowY: 'auto' }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                        <div style={{ textAlign: 'center', letterSpacing: 3, fontSize: '3em', margin: '10%' }}> Fornecedores </div>
                        <CIcon icon={cilPlus} onClick={() => navigate('/novo-contato')} style={{ width: '40px', cursor:'pointer', marginLeft: 'auto' }} />
                    </div>
                    <div id='listaFornecedores'>
                        { getContatos.slice().reverse().map(contato => (
                            <Fornecedor
                                key={contato.id}
                                foto={contato.foto} 
                                nome={contato.nome} 
                                registradoDesde={contato.registradoDesde}  
                                status={contato.status} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
