import React, { useState } from "react";
import axios from 'axios';
import { CImage, CForm, CFormLabel, CFormInput, CCol, CButton } from '@coreui/react';
import { useNavigate } from 'react-router-dom';
import background from '../assets/img/background.jpg';
import logo from '../assets/img/logo.png';

export default function Cadastro() {

    const ENDERECO_API = 'http://localhost:3000/usuarios/';
    const navigate = useNavigate();
    const [getNome, setNome] = useState();
    const [getEmail, setEmail] = useState();
    const [getSenha, setSenha] = useState();
    

    function salvar() {
        let user = {
            nome: getNome,
            email: getEmail,
            senha: getSenha
        }
        axios.post(ENDERECO_API, user)
            .then((response) => { 
                console.log('Cadastrado com sucesso.') 
                navigate("/login")
            })
            .catch((error) => { console.log('Erro ao cadastrar.') })
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'center', backgroundImage: `url(${background})`, backgroundSize: 'cover', height: '100vh', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15%', width:'100%' }}>
                <div className="cui-alinha">
                    <CImage align="center" rounded thumbnail src={logo} width={250} height={125} />
                    <div style={{ textTransform: 'uppercase', textAlign: 'center', marginTop: '7%', letterSpacing: 3, fontSize: '1em' }}> comida feita com ingredientes à<br/> base de plantas e muito amor </div>
                </div>
                <CForm style={{ backgroundColor: 'var(--cui-gray-100)', width: '25vw', height:'60vh', padding: '1.5% 1.5% 3% 1.5%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', letterSpacing: 3, fontSize: '2em', margin: '6%' }}> Cadastro de Usuário</div>
                    <CCol className="cui-column">
                        <CFormLabel className="cui-label" >Nome</CFormLabel>
                        <CFormInput 
                            type="text" 
                            id="inputName" 
                            placeholder="Seu nome" 
                            className="cui-input"
                            value={getNome}
                            onChange={e => setNome(e.target.value)}
                        />
                    </CCol>
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
                        <CButton onClick={() => salvar()} className="cui-btn" style={{ backgroundColor:'var(--cui-btn-color)' }} variant="outline">
                            Cadastrar
                        </CButton>
                        <CButton onClick={() => navigate('/login')} className="cui-btn" style={{ backgroundColor:'var(--cui-border-color-translucent)' }} variant="outline">
                            Voltar
                        </CButton>
                    </CCol>
                </CForm>
            </div>
        </div>
    );
}