import React, { Component } from "react";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.visible
        };
    }

    render() {
        return (
            <div className="menu">
                <div className={this.props.visible ? "visible" : ""}>
                    <div className="side-bar">
                        <div
                            className="close-button"
                            onClick={this.props.toggleMenu}
                        >
                            <span id="x">X</span>
                        </div>
                    </div>
                    <div
                        className="background"
                        onClick={this.props.toggleMenu}
                    />
                </div>
            </div>
        );
    }
}
export default Menu;
