import React from "react";
import { Link } from "react-router-dom";
import "./ProfilesHeader.css";

const ProfilesHeader = ({ count }) => {
  return (
    <div className="header">
      <p className="profile-count">Showing {count} profiles in the database</p>
      <Link to="/profiles/new" className="btn btn-primary new-profile-button">
        +
      </Link>
    </div>
  );
};

export default ProfilesHeader;
