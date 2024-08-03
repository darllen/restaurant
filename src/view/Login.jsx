import React, { useState } from "react";
import background from '../assets/img/background.jpg';
import logo from '../assets/img/logo.png';
import { useNavigate } from 'react-router-dom';
import { CImage, CForm, CFormLabel, CFormInput, CCol, CButton } from '@coreui/react';
import axios from 'axios';

export default function Login() {

    const ENDERECO_API = 'http://localhost:3000/usuarios/';
    const navigate = useNavigate();
    const [getEmail, setEmail] = useState();
    const [getSenha, setSenha] = useState();

    function logar() {
        axios.get(ENDERECO_API + `?email=${getEmail}&senha=${getSenha}`)
            .then((response) => {
                if (response.data.length !== 0) {
                    console.log('Usuário logado com sucesso!')
                    navigate("/home")
                } else {
                    console.log('Credenciais inválidas!')
                }
            })
            .catch((error) => {
                console.error('Erro na requisição:', error);
            });
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
                        <CFormInput 
                            type="email" 
                            id="inputEmail" 
                            placeholder="exemplo@exemplo.com" 
                            className="cui-input"
                            value={getEmail}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </CCol>
                    <CCol className="cui-column">
                        <CFormLabel className="cui-label" >Senha</CFormLabel>
                        <CFormInput 
                            type="password" 
                            id="inputPassword" 
                            placeholder="Password" 
                            className="cui-input"
                            value={getSenha}
                            onChange={e => setSenha(e.target.value)}
                        />
                    </CCol>
                    <CCol className="cui-column cui-alinha">
                        <CButton onClick={() => logar()} className="cui-btn" style={{ backgroundColor:'var(--cui-btn-color)' }} variant="outline">Acessar</CButton>
                        <CButton onClick={() => navigate('/cadastro')} className="cui-btn" style={{ backgroundColor:'var(--cui-btn-hover-color)' }} variant="outline">Cadastre-se</CButton>
                    </CCol>
                </CForm>
            </div>
        </div>
    );
}