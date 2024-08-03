import React from "react";
import background from '../assets/img/background.jpg';
import logo from '../assets/img/logo.png';
import { useNavigate } from 'react-router-dom';
import { CImage, CForm, CFormLabel, CFormInput, CCol, CButton } from '@coreui/react';

export default function Login() {

    const navigate = useNavigate();

    const handleButtonClick = (path) => {
        navigate(path);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', backgroundImage: `url(${background})`, backgroundSize: 'cover', height: '100vh', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15%', width:'100%' }}>
                <div className="cui-alinha">
                    <CImage align="center" rounded thumbnail src={logo} width={250} height={125} />
                    <div style={{ textTransform: 'uppercase', textAlign: 'center', marginTop: '7%', letterSpacing: 3, fontSize: '1em' }}> comida feita com ingredientes à<br/> base de plantas e muito amor </div>
                </div>
                <CForm style={{ backgroundColor: 'var(--cui-gray-100)', width: '25vw', height:'60vh', padding: '1.5% 1.5% 3% 1.5%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', letterSpacing: 3, fontSize: '3em', margin: '10%' }}> Login </div>
                    <CCol className="cui-column">
                        <CFormLabel className="cui-label" >Email</CFormLabel>
                        <CFormInput type="email" id="inputEmail" placeholder="exemplo@exemplo.com" className="cui-input"/>
                    </CCol>
                    <CCol className="cui-column">
                        <CFormLabel className="cui-label" >Senha</CFormLabel>
                        <CFormInput type="password" id="inputPassword" placeholder="Password" className="cui-input"/>
                    </CCol>
                    <CCol className="cui-column cui-alinha">
                        <CButton onClick={() => handleButtonClick('/home')} className="cui-btn" style={{ backgroundColor:'var(--cui-btn-color)' }} variant="outline">Acessar</CButton>
                        <CButton onClick={() => handleButtonClick('/cadastro')} className="cui-btn" style={{ backgroundColor:'var(--cui-btn-hover-color)' }} variant="outline">Cadastre-se</CButton>
                    </CCol>
                </CForm>
            </div>
        </div>
    );
}