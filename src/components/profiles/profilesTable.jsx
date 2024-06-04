import React from "react";
import TableHeader from "../common/tableHeader";
import TableBody from "../common/tableBody";

const ProfilesTable = ({ profiles, handleDelete, user }) => {
  return (
    <table className="table">
      <TableHeader />
      <TableBody user={user} profiles={profiles} handleDelete={handleDelete} />
    </table>
  );
};

export default ProfilesTable;
