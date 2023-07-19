import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Contact = () => {
    const userName = useSelector((state)=> state.user.value.name)
    const userPhone = useSelector((state)=> state.user.value.number)
  return (
    <div>
        <Link to="/">Login</Link>
        <Link to="/userDetail">UserDetail</Link>
        <h2>Our contact number is: {userName} {userPhone}</h2>
    </div>
  )
}

export default Contact