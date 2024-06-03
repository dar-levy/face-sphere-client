import React from "react";
import { Link } from "react-router-dom";

const TableBody = ({ profiles, handleDelete }) => {
  return (
    <tbody>
      {profiles.map((profile) => (
        <tr key={profile.id}>
          <td>
            <Link to={`/profiles/${profile.id}`}>{profile.first_name}</Link>
          </td>
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
