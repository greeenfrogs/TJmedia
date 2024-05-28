import React from "react";
import './Free.css';
import '../index.css';
import intro_act from './figfile/intro_act.svg';

export default function Activity() {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="introduce_container">
                <img className="introduce_image" src={intro_act} alt="intro_fact" />

            </span>
        </div>
    )
}