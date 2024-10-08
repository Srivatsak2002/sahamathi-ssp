import React from 'react';
import "./tokenInfo.css"
interface TokenInfoProps {
  exp: number;
  iat: number;
}

const TokenInfo: React.FC<TokenInfoProps> = ({ exp, iat }) => {
  const expirationDate = new Date(exp * 1000).toLocaleString();
  const issuedAtDate = new Date(iat * 1000).toLocaleString();

  return (
    <div className="token-info">
      <h2>Token Information</h2>
      <p><strong>Issued At:</strong> {issuedAtDate}</p>
      <p><strong>Expires At:</strong> {expirationDate}</p>
    </div>
  );
};

export default TokenInfo;
