import React, { Component } from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: "" };
    }

    render() {
        return (
            <input
                className="search-bar"
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)}
            />
        );
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.termSearched(term);
    }
}

export default SearchBar;
