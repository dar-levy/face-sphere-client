import React, { Component } from "react";
import { getProfiles, deleteProfile } from "../services/fakeProfileService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

class Profiles extends Component {
  state = {
    profiles: getProfiles(),
    pageSize: 4,
    currentPage: 1,
  };

  handleDelete = (profile) => {
    const profiles = this.state.profiles.filter((p) => p.id !== profile.id);
    this.setState({ profiles });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { length: count } = this.state.profiles;
    const { pageSize, currentPage, profiles: allProfiles } = this.state;
    if (count === 0) return <p>There are on profiles in the database</p>;
    const profiles = paginate(allProfiles, currentPage, pageSize);

    return (
      <>
        <p>Showing {count} profiles in the database</p>
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
                    onClick={() => this.handleDelete(profile)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
        />
      </>
    );
  }
}

export default Profiles;
