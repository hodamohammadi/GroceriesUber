import React, { Component } from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

class Geocoder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      geo: new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        placeholder: "Destination"
      })
    };
  }

  setProximity() {
      const center = this.props.map.getCenter().wrap();
      this.state.geo.setProximity({longitude: center.lng, latitude: center.lat});
  }

  render() {
    if (this.props.map) {
      this.setProximity();
      this.geoMap.appendChild(this.state.geo.onAdd(this.props.map));
    }
    return (
      <div
        className="search-bar"
        ref={ref => (this.geoMap = ref)}
      />
    );
  }
}
export default Geocoder;
