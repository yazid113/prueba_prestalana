import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, loginFailure } from '../../store/authSlice';
import { RootState } from '../../store/store';
import { axiosRequest } from '../../service/axios';
import { useNavigate } from 'react-router-dom';
import { LoginPageStyles } from './LoginStyles';
import LoginForm from '../../components/Login/LoginForm';
import { mockUsers } from '../../util/userMockData';

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const error = useSelector((state: RootState) => state.reducer.auth.error);

  const handlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userData.email || !userData.password) {
      return dispatch(loginFailure('Please provide username and password'));
    }
    try {
      const response = await axiosRequest.post('/auth/login', {
        username: userData.email,
        password: userData.password,
      });

      const token = response.data.token;
      const loginUserData = mockUsers.find(
        (user) => user.username === userData.email
      );
      if (!loginUserData) {
        return dispatch(loginFailure('Invalid username or password'));
      }
      const user = {
        id: loginUserData?.id,
        username: loginUserData?.username,
        firstname: loginUserData?.name.firstname,
        token: token,
      };
      dispatch(loginSuccess(user));
      navigate('/');
    } catch (error: any) {
      if (error.response.status === 401) {
        return dispatch(loginFailure('Invalid username or password'));
      }
      dispatch(loginFailure(error.message));
    }
  };

  return (
    <LoginPageStyles>
      <LoginForm
        email={userData.email}
        password={userData.password}
        error={error}
        handleChange={handlChange}
        handleSubmit={handleSubmit}
      />
    </LoginPageStyles>
  );
};

export default Login;
