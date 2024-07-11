import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #b3e6ff;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;

  label {
    margin-bottom: 5px;
  }

  input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
`;

const Button = styled.button`
  padding: 10px;
  margin: 10px 0;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
`;

const LoginText = styled.h2`
  margin: 20px 0;
  font-size: 24px;
  color: #333;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password
      });
      if (response.status === 200) {
        navigate('/search');
      }
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <PageContainer>
      <LoginContainer>
        <a href="https://clipartmag.com/dog-vector-clipart" title="Dog Vector Clipart">
          <img src="https://clipartmag.com/images/dog-vector-clipart-41.jpg" width="350" alt="Dog" />
        </a>
        <LoginText>Login</LoginText>
        <Form onSubmit={handleLogin}>
          <FormGroup>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormGroup>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Button type="submit">Login</Button>
        </Form>
        <p>
          Don't have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </LoginContainer>
    </PageContainer>
  );
};

export default Login;
