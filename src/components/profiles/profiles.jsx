import React, { Component } from "react";
import { getProfiles, deleteProfile } from "../../services/profileService";
import Pagination from "../common/pagination";
import { paginate } from "../../utils/paginate";
import ProfilesTable from "./profilesTable";
import "./Profiles.css";
import ProfilesHeader from "./ProfilesHeader";
import { toast } from "react-toastify";

class Profiles extends Component {
  state = {
    profiles: [],
    pageSize: 4,
    currentPage: 1,
  };

  async componentDidMount() {
    const { data: profiles } = await getProfiles();
    this.setState({ profiles: profiles });
  }

  handleDelete = async (profile) => {
    const originalProfiles = this.state.profiles;
    const profiles = originalProfiles.filter((p) => p._id !== profile._id);
    this.setState({ profiles });
    try {
      await deleteProfile(profile._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) console.log("x");
      toast.error("This profile has already been deleted.");
      this.setState({ profiles: originalProfiles });
    }
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
