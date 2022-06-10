import React, { Component } from "react";

import Table from "./common/table";

class Locations extends Component {
  columns = [
    {
      path: "code",
      label: "Code",
    },
    { path: "lat", label: "LATITUDE" },
    { path: "lng", label: "LONGATIUDE" },

    {
      key: "View",
      content: (movie) => (
        <button
          className="btn  btn-primary btn-sm"
          data-toggle="modal"
          data-target="#myModal"
          onClick={() => this.props.onView(movie)}
        >
          View On Map{" "}
        </button>
      ),
    },
  ];

  render() {
    const { log, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={log}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default Locations;
