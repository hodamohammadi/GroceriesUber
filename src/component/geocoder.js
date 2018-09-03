import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import Destination from "./destination";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

class Geocoder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      geo: new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        placeholder: "Destination"
      }),
      destLng: 0,
      destLat: 0
    };
  }

  setProximity() {
    const center = this.props.map.getCenter().wrap();
    this.state.geo.setProximity({
      longitude: center.lng,
      latitude: center.lat
    });
  }

  setDestination = () => {
    // Listen for the `result` event from the MapboxGeocoder that is triggered when a user
    // makes a selection and add a symbol that matches the result.
    this.state.geo.on("result", ev => {
      console.log(ev.result.geometry.coordinates[0]);
      console.log(ev.result.geometry.coordinates[1]);
      this.setState = ({
        lng: ev.result.geometry.coordinates[0],
        lat: ev.result.geometry.coordinates[1]
      });
      console.log(this.state.lng);
      console.log(this.state.lat);
    });
  };

  render() {
    if (this.props.map) {
      this.setProximity();
      this.setDestination();
      this.geoMap.appendChild(this.state.geo.onAdd(this.props.map));
    }
    return (
      <div>
        <div className="search-bar" ref={ref => (this.geoMap = ref)} />
        <Destination map={this.props.map} lng={this.state.lng} lat={this.state.lat}/>
      </div>
    );
  }
}
export default Geocoder;
