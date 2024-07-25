import React from "react";
import { CImage } from '@coreui/react';
import assetlogo from '../assets/img/assetlogo.png';
import { Link } from 'react-router-dom';

export default function Delivey() {
    return (
        <div style={{ backgroundColor: "#EFF4EB", height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div style={{ display: 'flex', gap: '5%', width:' 25%' }}>
                <CImage align="center" rounded thumbnail src={assetlogo} width={150} height={150} />
                <div style={{ textAlign: 'left', fontSize: '2em' }}> FAQ de <br />Delivery </div>
            </div>
            <div style={{ textTransform: 'uppercase', textAlign: 'center', marginTop: '3%', letterSpacing: 3, fontSize: '0.7em' }}> 
                comida feita com ingredientes à<br/> base de plantas e muito amor 
            </div>
            <Link to='/' style={{ display: 'flex', justifyContent: 'center', marginTop: '10%', fontWeight:'600', textDecoration: 'none', color: "#607D48" }}>
                voltar ao home
            </Link>
        </div>
    );
}