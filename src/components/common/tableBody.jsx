import React from "react";
import { Link } from "react-router-dom";

const TableBody = ({ profiles, handleDelete, user }) => {
  return (
    <tbody>
      {profiles.map((profile) => (
        <tr key={profile._id}>
          <td>
            <Link to={`/profiles/${profile._id}`}>{profile.first_name}</Link>
          </td>
          <td>{profile.last_name}</td>
          <td>{profile.email}</td>
          <td>
            {user && user.isAdmin && (
              <button
                onClick={() => handleDelete(profile)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
