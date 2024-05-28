import React from "react";
import './Free.css';
import '../index.css';
import intro_FAQ from './figfile/intro_faq.svg';

export default function FAQ() {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="introduce_container">
                <img className="introduce_image" src={intro_FAQ} alt="intro_FAQ" />
            </span>
        </div>
    )
}