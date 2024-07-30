import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendarDay, faStar, faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ activeCategory, handleCategoryClick }) => {
  return (
    <div
      className="col-md-3 d-none d-md-block sidebar"
      style={{
        backgroundColor: 'rgb(52,58,64)', 
        padding: '60px',
        height: '50vh',
        marginTop: '0px',
        position: 'relative',
      
      }}
    >
      <div className="sidebar-sticky"></div>
      <div className="profile" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', position: 'relative' }}>
        <img
          src="https://images.unsplash.com/photo-1629783509182-68c8c190e952?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile"
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            marginRight: '10px',
            position: 'relative',
            top: '-50px',
          }}
        />
        <span style={{ fontSize: '1em', fontWeight: 'bold', position: 'relative', left: '-90px', color: 'white', top: "15px" }}>ABCD</span>
      </div>
      <div className="nav-item" style={{ marginBottom: '15px' }}>
        <a
          href="#home"
          className="nav-link"
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            transition: 'background-color 0.3s',
            marginTop: '-30px',
          }}
        >
          <FontAwesomeIcon icon={faHome} /> Dashboard
        </a>
      </div>
      <div className="nav-item" style={{ marginBottom: '15px' }}>
        <a
          href="#today"
          className={`nav-link ${activeCategory === 'today' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('today')}
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            transition: 'background-color 0.3s',
            backgroundColor: activeCategory === 'today' ? '#c0c0c0' : 'transparent',
          }}
        >
          <FontAwesomeIcon icon={faCalendarDay} /> Today
        </a>
      </div>
      <div className="nav-item" style={{ marginBottom: '15px' }}>
        <a
          href="#important"
          className={`nav-link ${activeCategory === 'important' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('important')}
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            transition: 'background-color 0.3s',
            backgroundColor: activeCategory === 'important' ? '#c0c0c0' : 'transparent',
          }}
        >
          <FontAwesomeIcon icon={faStar} /> Important
        </a>
      </div>
      <div className="nav-item" style={{ marginBottom: '15px' }}>
        <a
          href="#planned"
          className={`nav-link ${activeCategory === 'planned' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('planned')}
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            transition: 'background-color 0.3s',
            backgroundColor: activeCategory === 'planned' ? '#c0c0c0' : 'transparent',
          }}
        >
          <FontAwesomeIcon icon={faCalendarAlt} /> Planned
        </a>
      </div>
      <div className="nav-item" style={{ marginBottom: '15px' }}>
        <a
          href="#assigned"
          className={`nav-link ${activeCategory === 'assigned' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('assigned')}
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            transition: 'background-color 0.3s',
            backgroundColor: activeCategory === 'assigned' ? '#c0c0c0' : 'transparent',
          }}
        >
          <FontAwesomeIcon icon={faUser} /> Assigned to me
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
