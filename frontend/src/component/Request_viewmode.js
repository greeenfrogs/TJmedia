import React, { useEffect, useState } from 'react';
import './Request_viewmode.css';
import intro_req from './figfile/intro_req.svg';
import front from './buttonfile/front.svg';
import back from './buttonfile/back.svg';
import uiux from './buttonfile/uiux.svg';
import EditButton from './buttonfile/correct_button.svg'; // 수정 버튼 이미지
import DeleteButton from './buttonfile/correct_button.svg'; // 삭제 버튼 이미지
import { useParams, useNavigate } from 'react-router-dom';

export default function RequestViewmode() {
    const { id } = useParams(); // URL에서 요청 ID 가져오기
    const [request, setRequest] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRequest = async () => {
            try {
                const response = await fetch(`/api/request/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setRequest(data);
                } else {
                    console.error('Error fetching request:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching request:', error);
            }
        };
        fetchRequest();
    }, [id]);

    const handleEdit = () => {
        navigate(`/request/edit/${id}`);
    };

    const handleDelete = async () => {
        try {
            const response = await fetch(`/api/request/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                console.log('Request deleted successfully');
                navigate('/request'); // Navigate to request page after successful deletion
            } else {
                console.error('Error deleting request:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting request:', error);
        }
    };

    if (!request) {
        return <div>Loading...</div>;
    }

    return (
        <div className='introduce_container'>
            <img className='introduce_image' src={intro_req} alt='introduce_req' />
            <div className="title-container">
                <h1 className="heading2">의뢰 제목</h1>
                <div className="name-box">{request.title}</div>
            </div>
            <div className="type-container">
                <h2 className="heading2">의뢰 유형</h2>
                <div className="icon-container">
                    {request.types && request.types.includes('Web') && <img className='type-icon' src={front} alt='front_icon' />}
                    {request.types && request.types.includes('IOS') && <img className='type-icon' src={back} alt='back_icon' />}
                    {request.types && request.types.includes('Android') && <img className='type-icon' src={uiux} alt='uiux_icon' />}
                </div>
            </div>
            <div className="price-container">
                <h2 className="heading2">가격 제시</h2>
                <div className="price-button">{request.price} 원</div>
            </div>
            <div className="write-container">
                <textarea
                    className="content-box"
                    value={request.content}
                    readOnly
                />
            </div>
            <div className="client-container">
                <h2 className="heading2">의뢰처</h2>
                <div className="email-box">{request.client}</div>
            </div>
            <div className="submit-container">
                <img
                    className='EditButton'
                    src={EditButton}
                    alt='EditButton'
                    onClick={handleEdit}
                />
                <img
                    className='DeleteButton'
                    src={DeleteButton}
                    alt='DeleteButton'
                    onClick={handleDelete}
                />
            </div>
        </div>
    );
}