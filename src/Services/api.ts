import axios from "axios";

const API_BASE_URL = "http://localhost:9000";
interface UserTokenGeneratePayload {
  username: string;
  password: string;
}


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


export const resetEntitySecret = (entityId: string, token: string) => {
  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`, 
  };

  return axios.post(`${API_BASE_URL}/entity/secret/reset`, { entityId }, { headers });
};


export const readEntitySecret = (entityId: string, token: string) => {
  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`, 
  };

  return axios.post(`${API_BASE_URL}/entity/secret/read`, { entityId }, { headers });
};