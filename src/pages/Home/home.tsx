import React from "react";
import { useLocation } from "react-router-dom";
import ResponsiveAppBar from "../../Components/Appbar/appbar";
import "./home.css";
import UserInfo from "../../Components/Userinfo/userinfo";
import Sidebar from "../../Components/Sidebar/sidebar";
import InfoCard from "../../Components/Card/card";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Typography, Box } from "@mui/material";

const Home = () => {
  const location = useLocation();
  const { email, token } = location.state as { email: string; token: string };
  const decodedToken = JSON.parse(atob(token.split(".")[1]));
  const entityMeta = decodedToken.entity_meta;

  const entityDetailsArray = Object.keys(entityMeta).map((key) => ({
    title: key,
    entityId: key, 
    value: entityMeta[key].join(", "),
  }));

  return (
    <div>
      <ResponsiveAppBar email={email} />
      <div className="home-container">
        <Sidebar />
        <div className="content">
          <Typography variant="h4">
            Welcome, {decodedToken.given_name}
          </Typography>

          <UserInfo
            title="User Information"
            name={decodedToken.name}
            email={decodedToken.email}
          />
          <Typography variant="h6">Entities</Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              gap: "16px",
              marginLeft: "280px",
              marginTop: "20px",
            }}
          >
            {entityDetailsArray.map((entity, index) => (
              <InfoCard
                key={index}
                icon={
                  <AccountCircleIcon sx={{ color: "green" }} fontSize="large" />
                }
                title={`Entity ${index + 1}`}
                entityId={entity.entityId}
                token={token} 
              />
            ))}
          </Box>

          <UserInfo
            title="User Information"
            name={decodedToken.name}
            email={decodedToken.email}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
