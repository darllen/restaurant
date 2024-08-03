import React, { useState } from "react";
import background from '../assets/img/background.jpg';
import logo from '../assets/img/logo.png';
import { useNavigate } from 'react-router-dom';
import { CImage, CForm, CFormLabel, CFormInput, CCol, CButton } from '@coreui/react';
import axios from 'axios';

export default function NovoContato() {

    const ENDERECO_API = 'http://localhost:3000/contatos/';
    const navigate = useNavigate();
    const [getNome, setNome] = useState();
    const [getEmail, setEmail] = useState();
    const [getTelefone, setTelefone] = useState();
    const [getFoto, setFoto] = useState();
    

    function salvar() {
        let contato = {
            nome: getNome,
            email: getEmail,
            telefone: getTelefone,
            foto: getFoto,
            status: "New",
            registradoDesde: new Date().toISOString().split('T')[0]
        }
        axios.post(ENDERECO_API, contato)
            .then((response) => { 
                console.log('Cadastrado com sucesso.') 
                navigate("/home")
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
                <CForm style={{ backgroundColor: 'var(--cui-gray-100)', width: '25vw', height:'auto', padding: '1.5% 1.5% 3% 1.5%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', letterSpacing: 3, fontSize: '2em', margin: '6%' }}> Novo Contato</div>
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
                        <CFormLabel className="cui-label" >Telefone</CFormLabel>
                        <CFormInput 
                            type="text" 
                            id="inputTelefone" 
                            placeholder="Telefone" 
                            className="cui-input"
                            value={getTelefone}
                            onChange={e => setTelefone(e.target.value)}
                        />
                    </CCol>
                    <CCol className="cui-column">
                        <CFormLabel className="cui-label" >Foto</CFormLabel>
                        <CFormInput 
                            type="text" 
                            id="inputFoto" 
                            placeholder="URL" 
                            className="cui-input"
                            value={getFoto}
                            onChange={e => setFoto(e.target.value)}
                        />
                    </CCol>
                    <CCol className="cui-column cui-alinha">
                        <CButton onClick={() => salvar()} className="cui-btn" style={{ backgroundColor:'var(--cui-btn-color)' }} variant="outline">
                            Salvar
                        </CButton>
                        <CButton onClick={() => navigate('/home')} className="cui-btn" style={{ backgroundColor:'var(--cui-border-color-translucent)' }} variant="outline">
                            Cancelar
                        </CButton>
                    </CCol>
                </CForm>
            </div>
        </div>
    );
}