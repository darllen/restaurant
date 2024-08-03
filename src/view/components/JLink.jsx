import React from "react";
import { Link } from 'react-router-dom';

export default function JLink({ path, text, style  }) {

    return (
        <Link to={path} 
            style={{ fontSize: '1.5em', 
                fontWeight:'600', 
                textDecoration: 'none', 
                color: "var(--cui-btn-hover-border-color)",
                ...style 
            }}>
            {text}
        </Link>
    );
}