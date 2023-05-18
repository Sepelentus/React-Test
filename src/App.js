import forest from './forest.jpg'
import React from 'react';
import './App.css';

function Header(){
  return (
    <div className='Base-div container'>
      <div className='row'>
        <div className='col-lg-8'>
          <header className='Header-text'>
            Vive la naturaleza
          </header>
        </div>

        <div className='col-lg-4'/>
        <hr></hr>
      <img className='Forest-image' src={forest} alt='forest'></img>
      </div>
    </div>
  );
}

export default Header;
