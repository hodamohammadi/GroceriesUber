import React, { Component } from "react";

class Hamburger extends Component {
    render() {
        return (
            <div className="hamburger-menu" onClick={this.props.toggleMenu}>
                <div className="bar1" key="b1" />
                <div className="bar2" key="b2" />
                <div className="bar3" key="b3" />
            </div>
        );
    }
}

export default Hamburger;
