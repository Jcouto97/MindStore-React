import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './profile.css'

function Profile() {

    const fetchedToken = localStorage.getItem("token")
    const userId = localStorage.getItem("userId")
    const [userData, setUserData] = useState({})

    useEffect(() => {

        //tenho que enviar token no header para poder aceder ao profile daquele user em especifico
        //por isso é que preciso deste request
        const request = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": fetchedToken
            }
        }

        async function fetchById() {
            //aqui nao é o url absoluto porque precisa de proxy, no json properties
            const response = await fetch(`api/v1/users/${userId}`, request)
            const json = await response.json()
            setUserData(json)
        }
        fetchById()
    }, [])

    return (
        <>
            <Header />
            <div className='profile-container'>
                <h1 className='profile-title'>Your profile :)</h1>
                <img className='profile-picture' src={userData.image} alt='profile pic' />
                <h2 className='profile-name'>{userData.firstName} {userData.lastName}</h2>
                <h4 className='profile-date'>{userData.dateOfBirth}</h4>
                <p className='profile-name'>{userData.address}</p>
                <p className='profile-email'>{userData.email}</p>

            </div>
            <Footer />
        </>
    )
}

export default Profile