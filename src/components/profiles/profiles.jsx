import React, { Component } from "react";
import { getProfiles, deleteProfile } from "../../services/fakeProfileService";
import Pagination from "../common/pagination";
import { paginate } from "../../utils/paginate";
import ProfilesTable from "./profilesTable";
import "./Profiles.css";
import ProfilesHeader from "./ProfilesHeader";

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
    if (count === 0) return <p>There are no profiles in the database</p>;
    const profiles = paginate(allProfiles, currentPage, pageSize);

    return (
      <>
        <ProfilesHeader count={count} />
        <ProfilesTable profiles={profiles} handleDelete={this.handleDelete} />
        <div className="pagination-container">
          <Pagination
            itemsCount={count}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
          />
        </div>
      </>
    );
  }
}

export default Profiles;
