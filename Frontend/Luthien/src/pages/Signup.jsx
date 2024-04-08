import { NavLink } from 'react-router-dom';
import './../styles/css/signup-style.css';
import { CiUser } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { useState } from 'react';
import {createUser} from './../services/handleReqs'

export default function Signup () {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');


  async function handleSubmit(e) {

    e.preventDefault();
    console.log('click')
    if(name && email && password && passwordConfirm) {
      await createUser({name, email, password, passwordConfirm})
    }
  }

  return <>
    
    <form className="container">
      <h1>Sign up</h1>
      <div className="name">
        <label for='name'><FaRegUser />Name</label>
        <input type="text" id="name" placeholder='name' onChange={(e) => setName(e.target.value)} required/>
      </div>
      <div className="email">
        <label for='email'><MdOutlineMail />Email</label>
        <input type="email" id="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} required/>
      </div>
      <div className="password">
        <label for='password'><RiLockPasswordLine />Password</label>
        <input type="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
      </div>
      <div className="password">
        <label for='password-confirm' ><RiLockPasswordLine/>Password confirm</label>
        <input type="password" id="password-confirm" placeholder="Password confirm" onChange={(e) => setPasswordConfirm(e.target.value)} required/>
      </div>
      <button onClick={handleSubmit} className='submit-btn'>Sign Up</button>

      <p>do you have an account? <NavLink className="link" to={"/login"}>login</NavLink></p>
    </form>
  </>
}