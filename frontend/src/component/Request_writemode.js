import React, { useState } from 'react';
import './Request_writemode.css';
import intro_req from './figfile/intro_req.svg';
import front from './buttonfile/front.svg';
import back from './buttonfile/back.svg';
import uiux from './buttonfile/uiux.svg';
import WriteButton from './buttonfile/write_button.svg';
import { useNavigate } from 'react-router-dom';

export default function RequestWritemode() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [client, setClient] = useState('');
    const [price, setPrice] = useState('');
    const [types, setTypes] = useState([]);
    const userId = 1; // Example user ID, replace with actual user ID
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const requestData = {
            title,
            content,
            client,
            price: parseFloat(price),
            types,
            isOngoing: true,
            userId,
        };

        try {
            const response = await fetch('/api/request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            if (response.ok) {
                console.log('Request submitted successfully');
                navigate('/request'); // Navigate to request page after successful submission
            } else {
                const errorData = await response.json();
                console.error('Error submitting request:', errorData);
            }
        } catch (error) {
            console.error('Error submitting request:', error);
        }
    };

    const handleTypeClick = (type) => {
        setTypes((prevTypes) => {
            if (prevTypes.includes(type)) {
                return prevTypes.filter((t) => t !== type);
            } else {
                return [...prevTypes, type];
            }
        });
    };

    return (
        <div className='introduce_container'>
            <img className='introduce_image' src={intro_req} alt='introduce_req' />
            <div className="title-container">
                <h1 className="heading2">의뢰 제목</h1>
                <input
                    type="text"
                    className="name-box"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="type-container">
                <h2 className="heading2">의뢰 유형</h2>
                <div className="icon-container">
                    <img
                        className='type-icon'
                        src={front}
                        alt='front_icon'
                        onClick={() => handleTypeClick('Web')}
                    />
                    <img
                        className='type-icon'
                        src={back}
                        alt='back_icon'
                        onClick={() => handleTypeClick('IOS')}
                    />
                    <img
                        className='type-icon'
                        src={uiux}
                        alt='uiux_icon'
                        onClick={() => handleTypeClick('Android')}
                    />
                </div>
            </div>
            <div className="price-container">
                <h2 className="heading2">가격 제시</h2>
                <input
                    type="number"
                    className="price-button"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <span className="price-text">원</span>
            </div>
            <div className="write-container">
                <textarea
                    className="content-box"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <div className="client-container">
                <h2 className="heading2">의뢰처</h2>
                <input
                    type="text"
                    className="email-box"
                    value={client}
                    onChange={(e) => setClient(e.target.value)}
                />
            </div>
            <div className="submit-container">
                <img
                    className='WriteButton'
                    src={WriteButton}
                    alt='WriteButton'
                    onClick={handleSubmit}
                />
            </div>
        </div>
    );
}
