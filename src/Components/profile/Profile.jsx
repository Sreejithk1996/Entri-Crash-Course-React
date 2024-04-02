import React from 'react'
import './Profile.css'

const Profile = (props) => {
    const {name,imgURL,phone,email} = props.profile
  return (
    <div className='main' >
      <h1>My contacts</h1>
      <div>
        <h2>{name}</h2>
        <img src={imgURL} alt=" profile pic" />
      </div>
      <div>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Profile
