import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login,logout,admin } from '../redux/store';
const Login = () => {
  const[age,setAge] = useState('');
  const[fullName,setFullName] = useState('');
  const[phone,setPhone] = useState('');

  const dispatch = useDispatch();
  const userName = useSelector((state)=> state.user.value.name)
  const userAge = useSelector((state)=> state.user.value.age)
  const userPhone = useSelector((state)=> state.user.value.number)
  return (
    <>
        <Link to='/userDetail'>User Details</Link>
        <Link to='/contact'>Contact</Link>
        <div style={{justifyContent:'center',alignItems:'center',height:'100vh',display:'flex',flexDirection:'column',gap:'1rem'}}>
            <h3>{userName}</h3>
            <h3>{userAge}</h3>
            <h3>{userPhone}</h3>
            <h1>Login</h1>
            
            <label >Full Name</label>
            <input value={fullName} type='text' name='fullname' onChange={(e)=> setFullName(e.target.value)}/>
            
            <label >Age</label>
            <input value={age} type='text' name='age' onChange={(e)=> setAge(e.target.value)}/>

            <label>Phone#</label>
            <input value={phone} type='text' name='phone' onChange={(e)=> setPhone(e.target.value)}/>
            
            <button
                onClick={
                    ()=>{
                        setAge('');
                        setFullName('');
                        setPhone('');
                        dispatch(
                        login(
                            {
                                name:fullName,
                                age:age,
                                number:phone
                            }
                            )
                            );
                        }
                        }
                >Login</button>
            <button
                onClick={()=>dispatch(logout())}
            >Logout</button>
        </div>
    </>
  )
}

export default Login