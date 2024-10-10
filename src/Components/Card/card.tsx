import React, { useState } from "react";
import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility"; // Import the eye icon
import axios from "axios";

interface InfoCardProps {
  icon: React.ReactElement<SvgIconComponent>;
  title: string;
  entityId: string; // Add entityId prop
  token: string; // Add token prop
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, entityId, token }) => {
  const [secret, setSecret] = useState<string | null>(null); // State for the secret

  const handleReadSecret = async () => {
    try {
      const response = await axios.post(
        `https://api.dev.sahamati.org.in/iam/v1/entity/secret/read`,
        { entityId },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        }
      );
      setSecret(response.data.secret); // Set the secret in state
    } catch (error) {
      console.error("Error reading entity secret:", error);
    }
  };

  return (
    <Card
      sx={{
        padding: "16px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        width: "calc(45%)",
        minHeight: "150px",
        marginBottom: "16px",
      }}
    >
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            marginBottom: "8px",
          }}
        >
          <Box sx={{ marginTop: "-4px", marginRight: "8px" }}>{icon}</Box>
          <Typography variant="h5">{title}</Typography>
          <IconButton onClick={handleReadSecret} sx={{ marginLeft: 'auto' }}>
            <VisibilityIcon />
          </IconButton>
        </Box>
        <Typography
          variant="body1"
          component="div"
          sx={{ whiteSpace: "pre-line", fontSize: "18px" }}
        >
          {secret ? `Secret: ${secret}` : "Secret not revealed yet."}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
