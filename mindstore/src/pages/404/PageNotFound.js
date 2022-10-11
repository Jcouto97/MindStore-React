import React from 'react'
import dog from "../../assets/dog.jpg";
import './pageNotFound.css'
import Header from '../../components/Header/Header';

function PageNotFound() {
  return (
    <>
      <Header />
      <div className='error-container'>
        <h1 className='error-title'>Page Not Found :(</h1>
        <img src={dog} alt="a dog" className='error-image' />
      </div>
    </>
  )
}

export default PageNotFound