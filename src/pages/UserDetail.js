import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const UserDetail = () => {
    const userName = useSelector((state)=> state.user.value.name)
    const userAge = useSelector((state)=> state.user.value.age)
    const userPhone = useSelector((state)=> state.user.value.number)
    return (
    <div>
        <Link to="/">Login</Link>
        <Link to="/contact">Contact</Link>
        <h1>User Details</h1>
        <h4>Name: {userName}</h4>
        <h4>Age: {userAge}</h4>
        <h4>Phone: {userPhone}</h4>
    </div>
  )
}

export default UserDetail