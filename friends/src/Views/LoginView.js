import React, { useState } from "react";
import axios from 'axios';
import Styled from "styled-components";


export default function LoginView(props){
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState("");

  const handleChange = (evt)=> {
    setCredentials({
      ...credentials,
      [evt.target.name]: evt.target.value
    })
  }

  const login = (evt)=> {
    evt.preventDefault();
    console.log(credentials);
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push('/friends');
        setError("");
      })
      .catch((err) => {
        console.log(err);
        setError("Wrong Username / Password! Retry:");
      });
  }

  return(
    <StyledLoginView>
        <div>
          {error !== "" ? <h3>{error}</h3> : <h3>Enter Login Info:</h3>}
        </div>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
    </StyledLoginView>
  );
}

const StyledLoginView = Styled.div`

`;