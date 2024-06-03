import React from "react";
import TableHeader from "./common/tableHeader";

const ProfilesTable = ({ profiles, handleDelete }) => {
  return (
    <table className="table">
      <TableHeader />
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
