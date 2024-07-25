import React from "react";
import background from '../assets/img/background.jpg';
import logo from '../assets/img/logo.png';
import { useNavigate } from 'react-router-dom';
import { CImage, CButton } from '@coreui/react';
import { CIcon } from '@coreui/icons-react';
import { cibFacebook, cibInstagram, cibTwitter } from '@coreui/icons';


export default function Home() {
    const navigate = useNavigate();

    const handleButtonClick = (path) => {
        navigate(path);
    };

    return (
        <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <CImage align="center" rounded thumbnail src={logo} width={250} height={125} />
                <div style={{ textTransform: 'uppercase', textAlign: 'center', marginTop: '7%', letterSpacing: 3, fontSize: '0.7em' }}> comida feita com ingredientes à<br/> base de plantas e muito amor </div>
            </div>
            <div style={{ backgroundColor: '#EFF4EB', width: '25vw', height:'70vh', padding: '1.5% 1.5% 3% 1.5%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }} >
                    <CButton onClick={() => handleButtonClick('/cardapio')} className="cui-btn" color="secondary" variant="outline">Cardápio</CButton>
                    <CButton onClick={() => handleButtonClick('/pratos-da-estacao')} className="cui-btn" color="secondary" variant="outline">Pratos da estação</CButton>
                    <CButton onClick={() => handleButtonClick('/nosso-espaco')} className="cui-btn" color="secondary" variant="outline">O espaço</CButton>
                    <CButton onClick={() => handleButtonClick('/faq-delivery')} className="cui-btn" color="secondary" variant="outline">FAQ de delivery</CButton>
                    <CButton onClick={() => handleButtonClick('/sobre-nos')} className="cui-btn" color="secondary" variant="outline">Sobre nós</CButton>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10%', marginTop: 'auto' }}>
                    <CIcon icon={cibFacebook} size='sm' width='30' style={{ cursor: 'pointer '}}/>
                    <CIcon icon={cibInstagram} size='sm' width='30' style={{ cursor: 'pointer '}}/>
                    <CIcon icon={cibTwitter} size='sm' width='30' style={{ cursor: 'pointer '}}/>
                </div>
            </div>
        </div>
    );
}