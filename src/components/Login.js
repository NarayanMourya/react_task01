import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        const response = await axios.post('https://reqres.in/api/login',{email,password});
        localStorage.setItem('token',response.data.token);
        navigate('/Homepage');
    }
    useEffect(() =>{
        if(localStorage.getItem('token')) navigate ('/Homepage');
        },[localStorage.getItem('token')])

        return(
            <div className='login-container text-center'>
			<div>
				<h1 className='mt-5'>LOGIN PAGE</h1>
				<div>
					<div className='mt-5'>
						<h3>Email :</h3>
						
					</div>
					<input className='w-25 form-control m-auto' type="text" value={email} onChange={e => setEmail(e.target.value)} />
				</div>
				<div>
					<div className='mt-2'>
						<h3>Password :</h3>
						
					</div>
					<input className='w-25 form-control m-auto' type="password" value={password} onChange={e => setPassword(e.target.value)} />
				</div>
				<button className='mt-4 btn btn-secondary w-25  ' onClick={handleLogin}>Login</button>
			</div>
		</div>
	)           
        
}

export default Login;