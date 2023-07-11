import React, { useState } from "react";


const RegisterPage: React.FC = () => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [email, setEmail] = useState('');

   const handleRegistrer = () => {
       //logica 
       console.log('Register:', username, password, email);
   };
   return(
       <div>
           <h1>Register Page</h1>
           <input
           type="text"
           placeholder="Username"
           value={username}
           onChange={(e) => setUsername(e.target.value)}
           />
           <input 
           type="password"
           placeholder="Username"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           />
           <input
           type="email"
           placeholder="Email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           />
           <button onClick={handleRegistrer}>Registrer</button>
       </div>
   );
};

export default RegisterPage