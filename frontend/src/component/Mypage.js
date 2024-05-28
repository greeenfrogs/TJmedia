import React, { useState } from "react";
import './Mypage.css';
import '../index.css';
import intro_mypage from './figfile/intro_my.svg';
import MemberInfo from './Mypage_func/MemberInfo.js';
import ClientInfo from './Mypage_func/ClientInfo.js';
import DeveloperInfo from './Mypage_func/DeveloperInfo.js';

//+can link only if it's signin

export default function Mypage() {
    const [menu, setMenu] = useState('');

    const handleMenuClick = (selectedMenu) => {
        setMenu(selectedMenu);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className="container">
                <span className="introduce_container">
                    <img className="introduce_image" src={intro_mypage} alt="intro_mypage" />
                </span>
                <br></br>
                <div className="wrapper">
                    <div className="menu">
                        <button className="info-button" onClick={() => handleMenuClick('memberInfo')}>
                            회원 정보
                        </button>
                        <button className="info-button" onClick={() => handleMenuClick('clientInfo')}>
                            의뢰인 정보
                        </button>
                        <button className="info-button" onClick={() => handleMenuClick('developerInfo')}>
                            개발자 정보
                        </button>
                    </div>
                    <div className="info">
                        {menu === 'memberInfo' && <MemberInfo/>}
                        {menu === 'clientInfo' && <ClientInfo/>}
                        {menu === 'developerInfo' && <DeveloperInfo/>}
                    </div>
                </div>
            </div>
        </div>
    )
}