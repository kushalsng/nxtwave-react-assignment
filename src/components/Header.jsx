import React from 'react'
import logo from '../assets/images/logo.png';
import avatar from '../assets/images/avatar.png'
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation()
  return (
    <header className="header">
      <section className="section">
        <img src={logo} alt="Logo" className="logo" />
        <div className="button-container">
          {!pathname.includes('add') && <button className="button" onClick={() => navigate('/add')}>ADD ITEM</button>}
          <img src={avatar} alt="avatar" className="profile-img" />
        </div>
      </section>
      <div className="divider" />
    </header>
  )
}

export default Header