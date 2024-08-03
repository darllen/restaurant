import React from "react";
import { CImage } from '@coreui/react';
import assetlogo from '../assets/img/assetlogo.png';
import JLink from './components/JLink';
import JContent from './components/JContent';

export default function Espaco() {
    return (
        <div style={{ backgroundColor: "var(--cui-gray-100)", height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div style={{ display: 'flex', gap: '5%', width:' 25%' }}>
                <CImage align="center" rounded thumbnail src={assetlogo} width={150} height={150} />
                <div style={{ textAlign: 'left', fontSize: '2em' }}> O Espaço </div>
            </div>
            <JContent />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10%' }}>
                <JLink path='/' text='voltar ao home' />
            </div>
        </div>
    );
}