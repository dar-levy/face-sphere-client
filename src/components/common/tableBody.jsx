import React from "react";

const TableBody = ({ profiles, handleDelete }) => {
  return (
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
  );
};

export default TableBody;
