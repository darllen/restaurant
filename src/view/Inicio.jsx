import React from "react";
import background from '../assets/img/background.jpg';
import logo from '../assets/img/logo.png';
import { useNavigate } from 'react-router-dom';
import { CImage, CButton } from '@coreui/react';
import { CIcon } from '@coreui/icons-react';
import { cibFacebook, cibInstagram, cibTwitter } from '@coreui/icons';
import JLink from './components/JLink';


export default function Inicio() {
    const navigate = useNavigate();

    const handleButtonClick = (path) => {
        navigate(path);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', backgroundImage: `url(${background})`, backgroundSize: 'cover', height: '100vh', position: 'relative' }}>
            <JLink path='login' text='Entrar' style={{ position: 'absolute', top: '5%', right: '5%' }} />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15%', width:'100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <CImage align="center" rounded thumbnail src={logo} width={250} height={125} />
                    <div style={{ textTransform: 'uppercase', textAlign: 'center', marginTop: '7%', letterSpacing: 3, fontSize: '1em' }}> comida feita com ingredientes à<br/> base de plantas e muito amor </div>
                </div>
                <div style={{ backgroundColor: 'var(--cui-gray-100)', width: '25vw', height:'70vh', padding: '1.5% 1.5% 3% 1.5%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }} >
                        <CButton onClick={() => handleButtonClick('/cardapio')} className="cui-option" color="secondary" variant="outline">Cardápio</CButton>
                        <CButton onClick={() => handleButtonClick('/pratos-da-estacao')} className="cui-option" color="secondary" variant="outline">Pratos da estação</CButton>
                        <CButton onClick={() => handleButtonClick('/nosso-espaco')} className="cui-option" color="secondary" variant="outline">O espaço</CButton>
                        <CButton onClick={() => handleButtonClick('/faq-delivery')} className="cui-option" color="secondary" variant="outline">FAQ de delivery</CButton>
                        <CButton onClick={() => handleButtonClick('/sobre-nos')} className="cui-option" color="secondary" variant="outline">Sobre nós</CButton>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10%', marginTop: 'auto' }}>
                        <CIcon icon={cibFacebook} size='sm' width='30' style={{ cursor: 'pointer '}}/>
                        <CIcon icon={cibInstagram} size='sm' width='30' style={{ cursor: 'pointer '}}/>
                        <CIcon icon={cibTwitter} size='sm' width='30' style={{ cursor: 'pointer '}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}