import React from 'react';
import {Link} from 'react-router-dom';
import '../index.css';
import './Header.css';
import logo from './figfile/logo1.svg';

//Problem!!!! 여기 전체가 화면 비율 바뀔 때 같이 글자 포지션 고정이 안됨
//맨 위에 ul il, nav로 로그인/회원가입 만들기
export default function Header() {
  return (
    <div className='HeaderDiv'style={{ display: 'flex', alignItems: 'center' }}>
        
        {/* Link 색깔 --theme---dark---solids */}
        <Link to="/" style={{ textDecoration: 'none', color : '#16192C' }}>
          
          <span className='logo_container'>
            <img className='logo_image' src={logo} alt='greenfrog' />
          </span>

          <h1>
            <span className='greenfrogTitle'>청개고리</span><br></br>
            <span className='greenfrogExplain'>청</span>년 <span className='greenfrogExplain'>개</span>발자들의 연결 <span className='greenfrogExplain'>고리</span>
          </h1>
          
        </Link>

        <nav>
          <ul>
            <li><Link to="/request" className='request-button'>의뢰 게시판</Link></li>
            <li><Link to="/free" className='free-button'>자유 게시판</Link></li>
            <li><Link to="/activity" className='activity-button'>활동 내역</Link></li>
            <li><Link to="/mypage" className='MYPAGE-button'>MY PAGE</Link></li>
            <li><Link to="/faq" className='FAG-button'>FAQ</Link></li>
          </ul>
        </nav>
        
    </div>
  );
}