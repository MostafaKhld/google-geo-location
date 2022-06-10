import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import log from "./assets/img/login.jpg";
import SimpleMap from "./simpleMap";
import LocationsList from "./locationsList";

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};
function success(pos) {
  var crd = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function errors(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

class LocationEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      errors: {},
      log: [
        {
          _id: "62a3953dd60ab107bdba735e",
          code: 85,
          lat: 29.97648,
          lng: 31.131302,
        },
        {
          _id: "62a3953daa03614ace856143",
          code: 62,
          lat: 30.090984,
          lng: 31.322708,
        },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  schema = {
    bran_amount: Joi.number().required().positive(),
    userId: Joi.number().required(),
    shift: Joi.number(),
    mill: Joi.number(),
  };
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    let lat = this.state.lat;
    let lng = this.state.lng;
    if (!lat) {
      alert("Please Allow Us To Read Your Location 🐱‍👤");
    } else {
      let log = [...this.state.log];
      let _id = log.length + 1;
      let newCord = { _id: _id, code: this.state.value, lat: lat, lng: lng };
      log.unshift(newCord);
      this.setState({ log });
      const anchor = document.querySelector("#samples");
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }
  componentDidMount() {
    let self = this;
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            console.log(result.state);
            //If granted then you can directly call your function here
            // navigator.geolocation.getCurrentPosition(success);
            navigator.geolocation.getCurrentPosition((position) => {
              self.setState({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
            });
          } else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                self.setState({
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                });
              },
              errors,
              options
            );
          } else if (result.state === "denied") {
            console.log("d");
            //If denied then you have to show instructions to enable location
            alert("Please Allow Us To Read Your Location 🐱‍👤");
          } else {
            alert("Please Allow Us To Read Your Location 🐱‍👤");
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });
    } else {
      alert("Sorry Not available!");
    }
  }
  render() {
    return (
      <div className="login-page">
        <div
          className="page-header clear-filter"
          filter-color="orange"
          id="location"
        >
          <div
            className="page-header-image"
            style={{ backgroundImage: `url(${log})` }}
          ></div>
          <div className="content">
            <div className="container">
              <div className="col-md-4 ml-auto mr-auto">
                <div className="card card-login card-plain">
                  <form className="form" onSubmit={this.handleSubmit}>
                    <div className="card-header text-center">
                      Enter Your Code & Allow Reading Location
                    </div>
                    <div className="card-body">
                      <div className="input-group no-border input-lg">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="now-ui-icons users_circle-08"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Code..."
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="card-footer text-center">
                      <input
                        className="btn btn-primary btn-round btn-lg btn-block"
                        type="submit"
                        value="Submit"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LocationsList log={this.state.log} />
      </div>
    );
  }
}

export default LocationEntry;
