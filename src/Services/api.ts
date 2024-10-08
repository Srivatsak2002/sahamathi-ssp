// src/api.ts
import axios from "axios";

const API_BASE_URL = "https://api.dev.sahamati.org.in/iam/v1";

interface UserRegisterPayload {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  txnId: string;
}

interface UserTokenGeneratePayload {
  username: string;
  password: string;
}

interface UserPasswordResetPayload {
  email: string;
  txnId: string;
}

export const userRegister = (data: UserRegisterPayload) => {
  return axios.post(`${API_BASE_URL}/user/register`, data);
};

export const userTokenGenerate = (data: UserTokenGeneratePayload) => {
  const formData = new URLSearchParams();
  formData.append("username", data.username);
  formData.append("password", data.password);

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const response = axios.post(`${API_BASE_URL}/user/token/generate`, formData, {
    headers,
  });
  return response;
};

export const userPasswordReset = (data: UserPasswordResetPayload) => {
  return axios.post(`${API_BASE_URL}/user/password/reset`, data);
};
