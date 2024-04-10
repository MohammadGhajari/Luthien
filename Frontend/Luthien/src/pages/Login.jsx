import {login} from './../services/handleReqs'
import validator from 'validator';
import toast from 'react-hot-toast'
import closableToast from './../components/notifications'
import LoginForm from '../components/LoginForm';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 


export default function Login () {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const  navigate = useNavigate();

  async function handleSubmit(e) {

    e.preventDefault();
    
    if(!validator.isEmail(email)) return closableToast('Please provide a valid email.');
    
    const res = await toast.promise(
      login({email, password}),
       {
         loading: 'Logging in...',
         success: <b>Welcome to our community!👋</b>,
         error: <b>Try again.⚠️</b>,
       }
     );
     if(res === 'success') navigate('/');

  }

  return <LoginForm setEmail={setEmail} setPassword={setPassword}  handleSubmit={handleSubmit} type={'login'} />
  
}