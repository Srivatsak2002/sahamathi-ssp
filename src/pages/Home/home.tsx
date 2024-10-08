import React from "react";
import { useLocation } from "react-router-dom";
import ResponsiveAppBar from "../../Components/Appbar/appbar";
import "./home.css";
import UserInfo from "../../Components/Userinfo/userinfo";
import TokenInfo from "../../Components/Tokeninfo/tokenInfo";
import RolesList from "../../Components/Roleslist/rolesList";
import Sidebar from "../../Components/Sidebar/sidebar";

const Home = () => {
  const location = useLocation();
  const { email, token } = location.state as { email: any; token: string };
  const decodedToken = JSON.parse(atob(token.split(".")[1]));
  console.log("token came ", token);
  return (
    <div>
      <ResponsiveAppBar email={email} />
     
      <div className="home-container">
      <Sidebar />
        <div className="content">
          <h1>
            <strong>Welcome, {decodedToken.given_name}</strong>
          </h1>

          <UserInfo name={decodedToken.name} email={decodedToken.email} />
          <TokenInfo exp={decodedToken.exp} iat={decodedToken.iat} />
          <RolesList roles={decodedToken.resource_access.account.roles} />
        </div>
      </div>
    </div>
  );
};

export default Home;
