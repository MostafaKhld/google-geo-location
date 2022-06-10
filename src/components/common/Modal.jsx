import React, { Component } from "react";
import SimpleMap from "./../simpleMap";

function Modal({ cord }) {
  return (
    <div
      className="modal fade"
      id="myModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header justify-content-center">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              <i className="now-ui-icons ui-1_simple-remove"></i>
            </button>
            <h4 className="title title-up">Google Geo-Location API</h4>
          </div>
          <div className="modal-body">
            <SimpleMap lat={cord.lat} lng={cord.lng} />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
