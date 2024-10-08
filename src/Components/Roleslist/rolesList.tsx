import React from 'react';
import "./rolesList.css"
interface RolesListProps {
  roles: string[];
}

const RolesList: React.FC<RolesListProps> = ({ roles }) => {
  return (
    <div className="roles-list">
      <h2>User Roles</h2>
      <ul>
        {roles.map((role, index) => (
          <li key={index}>{role}</li>
        ))}
      </ul>
    </div>
  );
};

export default RolesList;
