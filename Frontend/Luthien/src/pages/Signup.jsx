import {signup} from './../services/handleReqs'
import validator from 'validator';
import toast from 'react-hot-toast'
import closableToast from './../components/notifications'
import LoginForm from '../components/LoginForm';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Signup () {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const  navigate = useNavigate();

  async function handleSubmit(e) {

    e.preventDefault();
    
    if(!validator.isEmail(email)) return closableToast('Please provide a valid email.');
    if(password !== passwordConfirm) return closableToast('Password and password confirm must be the same.');
    if(password.length < 8) return closableToast('Password length must be greater than 8.');
    
    const res = await toast.promise(
      signup({name, email, password, passwordConfirm}),
       {
         loading: 'Signning up...',
         success: <b>Welcome to our community!👋</b>,
         error: <b>Try again.⚠️</b>,
       }
     );
     if(res === 'success') navigate('/');

  }

  return <LoginForm setName={setName} setEmail={setEmail} setPassword={setPassword} setPasswordConfirm={setPasswordConfirm} handleSubmit={handleSubmit} type={'signup'} />
  
}