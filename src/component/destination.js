import React from "react";
import Mapboxgl from "mapbox-gl";

class Destination extends React.Component {
  setDestination(lng, lat) {
    if (lng != null || lat != null) {
      var destination = this.destinationContainer;
      // add marker to map
      new Mapboxgl.Marker(destination)
        .setLngLat([lng, lat])
        .addTo(this.props.map);
    }
  }
  render() {
    if (this.props.map) {
      this.setDestination(this.props.lng, this.props.lat);
    }
    return (
      <div
        className="destination"
        ref={destination => (this.destinationContainer = destination)}
      />
    );
  }
}

export default Destination;
