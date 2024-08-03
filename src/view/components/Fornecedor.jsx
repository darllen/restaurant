import React from "react";
import { CImage } from '@coreui/react';


export default function Fornecedor({ foto, nome, registradoDesde, status }) {

    function formatarData(dataParam) {
        if (dataParam === null || dataParam === '' || dataParam === undefined) {
            return '';
        }
    
        const meses = [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
            'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ];
    
        const data = new Date(dataParam);
        
        const dia = data.getDate();
        const mes = meses[data.getMonth()];
        const ano = data.getFullYear();
    
        return `${mes[0]}${mes[1]}${mes[2]} ${dia}, ${ano}`;
    }

    return (
        <div style={{ borderBottom: '1px solid var(--cui-gray-700)', padding: '0% 4% 2% 3%', display: 'flex', cursor: 'pointer'}}>
            <div className="cui-alinha" id="fotinha" style={{marginRight: '8%'}}>
                <CImage align="center" rounded thumbnail src={foto} width={70} height={70} style={{borderRadius: '50%'}}></CImage>
            </div>
            <div>
                <p id="nome" style={{ letterSpacing: 2, fontSize: '1.5em', fontWeight: 500, fontFamily: 'Roboto'}}>{nome}</p>
                <p id="info" style={{ letterSpacing: 2, fontSize: '1em', fontWeight: 500, fontFamily: 'Roboto'}}>
                    {status} | Registered: {formatarData(registradoDesde)}
                </p>
            </div>
        </div>
    );
}