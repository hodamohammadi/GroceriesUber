import React from "react";
import Mapboxgl from "mapbox-gl";
import Geocoder from "./geocoder";

Mapboxgl.accessToken =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -79.3806,
      lat: 43.6952,
      zoom: 12,
      map: null
    };
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    const mapValue = new Mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [lng, lat],
      zoom
    });

    mapValue.on("move", () => {
      const { lng, lat } = mapValue.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: mapValue.getZoom().toFixed(2)
      });
    });

    // Add geolocate control to the map.
    mapValue.addControl(
      new Mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      })
    );

    this.setState({
      map: mapValue
    });
  }

  render() {
    return (
      <div>
        <div
          ref={el => (this.mapContainer = el)}
          className="absolute top right left bottom"
        />
        <Geocoder map={this.state.map} />
      </div>
    );
  }
}
export default Map;
