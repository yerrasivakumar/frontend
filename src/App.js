import axios from 'axios';
import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
axios.defaults.withCredentials = true;
  const handleSubmit = (e) =>{
    e.preventDefault();
   
      axios.post('https://deploy-five-kappa.vercel.app/user/userregistration',
      {
        "name":name,
        "email":email,
        "password":password,
       
    
    }
      ).then((response)=>{
   window.alert(response?.data?.message)
    // console.log(response?.data?.message);
 
   }).catch((error)=>{
   console.log(error);
   })
   setName('');
   setEmail('');
   setGender('');

  }
  return (
    <form onSubmit={handleSubmit}>
    <label>
      Name:
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </label>
    <br />
    <label>
      Email:
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    </label>
    <br />
    <label>
      Password:
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    </label>
    <br />
   
    <br />
    <button type="submit">Submit</button>
  </form>
  )
}

export default App