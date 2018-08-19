import React from "react";
import ReactDOM from "react-dom";
import Mapboxgl from "mapbox-gl";
import Geocoder from './geocoder';

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
mapValue.addControl(new Mapboxgl.GeolocateControl({
  positionOptions: {
      enableHighAccuracy: true
  },
  trackUserLocation: true
}));

// create a DOM element for the marker
var marker = {
  "type": "Feature",
  "properties": {
      "message": "Foo",
      "iconSize": [60, 60]
  },
  "geometry": {
      "type": "Point",
      "coordinates": [
        -79.3806,
        43.6952
      ]
  }
};
var destination = this.destinationContainer;
destination.className = 'marker';
destination.style.backgroundImage = 'url(https://placekitten.com/g/' + marker.properties.iconSize.join('/') + '/)';
destination.style.width = marker.properties.iconSize[0] + 'px';
destination.style.height = marker.properties.iconSize[1] + 'px';

// add marker to map
new Mapboxgl.Marker(destination)
    .setLngLat(marker.geometry.coordinates)
    .addTo(mapValue);

    this.setState ({
      map: mapValue
    })

  }

  render() {
    const { lng, lat, zoom } = this.state;


    return (
      <div>
        <div
          ref={el => (this.mapContainer = el)}
          className="absolute top right left bottom"
        />
        <Geocoder map={this.state.map} />
        <div className="destination" ref={destination => (this.destinationContainer = destination)}/>
        </div>
    );
  }
}
export default Map;
