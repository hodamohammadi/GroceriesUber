import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import Map from './component/map';
import Hamburger from './component/hamburger';
import Menu from './component/menu';
import "./css/style.css";

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        visible: false
    };
}

toggleMenu = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
};

render() {
    return (
        <div>
            <Hamburger toggleMenu={this.toggleMenu} hide />

            <Menu visible={this.state.visible} toggleMenu={this.toggleMenu} />
           
            <Map />
        </div>
    );
}
}

ReactDOM.render(<Application />, document.getElementById('app'));
