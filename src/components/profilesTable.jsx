import React from "react";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";

const ProfilesTable = ({ profiles, handleDelete }) => {
  return (
    <table className="table">
      <TableHeader />
      <TableBody profiles={profiles} handleDelete={handleDelete} />
    </table>
  );
};

export default ProfilesTable;
