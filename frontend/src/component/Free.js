import React from "react";
import './Free.css';
import '../index.css';
import intro_free from './figfile/intro_free.svg';

export default function Free() {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="introduce_container">
                <img className="introduce_image" src={intro_free} alt="intro_free" />

            </span>
        </div>
    )
}