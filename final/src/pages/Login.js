import React, { useContext, useState } from 'react';

import { Context } from '../Context/AuthContext';

export default function Login() {
  const { authenticated, handleLogin } = useContext(Context);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <input onChange={(e) => { setLogin(e.target.value) }} />
      <input type="password" onChange={(e) => { setPassword(e.target.value) }} />
      <button type="button" onClick={() => { handleLogin(login, password) }}>Entrar</button>
    </div>
  );
}