import React from "react";

const ProfilesTable = ({ profiles, handleDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {profiles.map((profile) => (
          <tr key={profile.id}>
            <td>{profile.first_name}</td>
            <td>{profile.last_name}</td>
            <td>{profile.email}</td>
            <td>
              <button
                onClick={() => handleDelete(profile)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProfilesTable;
