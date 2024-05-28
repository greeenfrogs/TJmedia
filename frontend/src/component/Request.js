import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Request.css';
import '../index.css';
import intro_req from './figfile/intro_req.svg';
import searchbar_svg from './buttonfile/searchbar.svg';
import searchtype_svg from './buttonfile/searchtype.svg';
import write_button_svg from './buttonfile/write_button.svg';
import frog_empty_svg from './buttonfile/frog_empty.svg';
import frog_click_svg from './buttonfile/frog_click.svg';
import correct_button_svg from './buttonfile/correct_button.svg';
import Pagination from './Pagination';

export default function Request() {
    const navigate = useNavigate();
    const [frogClicked, setFrogClicked] = useState(Array.from({ length: 11 }, () => false));
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedMenu, setSelectedMenu] = useState('전체');
    const [posts, setPosts] = useState([]);
    const totalPages = 10;

    useEffect(() => {
        fetch(`/api/request?page=${currentPage - 1}&size=10`)
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching posts:', error));
    }, [currentPage]);

    const handleMenuClick = (option) => {
        if (option === 'write') {
            navigate('/request/writemode');
        } else {
            setSelectedMenu(option);
        }
    };

    const handleFrogClick = (row) => {
        const updatedFrogClicked = [...frogClicked];
        updatedFrogClicked[row] = !updatedFrogClicked[row];
        setFrogClicked(updatedFrogClicked);
    };

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <img className='introduce_image' src={intro_req} alt='introduce_req' />
            <div className="header_req">
                <div className="menu-left">
                    <img className="Searchbar" src={searchbar_svg} alt="searchbar" />
                    <div className="dropdown">
                        <img className="Searchtype" src={searchtype_svg} alt="searchtype" />
                        <div className="dropdown-content">
                            <a
                                className={`heading3 ${selectedMenu === '전체' ? 'selected' : ''}`}
                                href="#all"
                                onClick={() => handleMenuClick('전체')}
                            >
                                전체
                            </a>
                            <a
                                className={`heading3 ${selectedMenu === '의뢰처' ? 'selected' : ''}`}
                                href="#client"
                                onClick={() => handleMenuClick('의뢰처')}
                            >
                                의뢰처
                            </a>
                            <a
                                className={`heading3 ${selectedMenu === '의뢰 제목' ? 'selected' : ''}`}
                                href="#title"
                                onClick={() => handleMenuClick('의뢰 제목')}
                            >
                                의뢰 제목
                            </a>
                        </div>
                    </div>
                </div>
                <img
                    className="WriteButton"
                    src={write_button_svg}
                    alt="write_button"
                    onClick={() => handleMenuClick('write')}
                />
            </div>
            <div>
                <table className="request-table">
                    <thead>
                    <tr>
                        <th></th>
                        <th>가격</th>
                        <th>유형</th>
                        <th>의뢰처</th>
                        <th>의뢰 제목</th>
                        <th>진행 상태</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {posts.map((post, rowIndex) => (
                        <tr key={post.id} className="table-row">
                            <td>
                                <img
                                    src={frogClicked[rowIndex] ? frog_click_svg : frog_empty_svg}
                                    alt={`frog_${rowIndex}`}
                                    className="frog-icon"
                                    onClick={() => handleFrogClick(rowIndex)}
                                />
                            </td>
                            <td>{post.price}</td>
                            <td>{post.requestType}</td>
                            <td>{post.client}</td>
                            <td>
                                    <span
                                        className="link"
                                        onClick={() => navigate(`/request/view/${post.id}`)}
                                    >
                                        {post.title}
                                    </span>
                            </td>
                            <td>{post.isOngoing ? '진행중' : '완료'}</td>
                            <td>
                                <img
                                    src={correct_button_svg}
                                    alt={`correct_button_${rowIndex}`}
                                    className="correct-icon"
                                />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageClick={handlePageClick}
            />
        </div>
    );
}
