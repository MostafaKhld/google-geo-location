import React, { Component } from "react";

import Locations from "./locationsTable";
import bg from "./assets/img/bg3.jpg";
import Modal from "./common/Modal";
class LocationsList extends Component {
  state = {
    log: [],
    cord: {},
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" },
  };

  async componentDidMount() {}

  handleView = (cord) => {
    this.setState({ cord });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    const { pageSize, currentPage, sortColumn } = this.state;
    const { log } = this.props;

    return (
      <div className="login-page">
        <div
          className="page-header clear-filter"
          filter-color="orange"
          id="location"
        >
          <div
            className="page-header-image"
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
          <div className="content">
            <div className="container">
              <div className="col-md-6 ml-auto mr-auto">
                <div className="card-header text-center" id="samples">
                  Locations Samples
                </div>
                <Locations
                  log={log}
                  sortColumn={sortColumn}
                  onView={this.handleView}
                  onSort={this.handleSort}
                />
              </div>
            </div>
          </div>
        </div>
        <Modal cord={this.state.cord} />
      </div>
    );
  }
}

export default LocationsList;
