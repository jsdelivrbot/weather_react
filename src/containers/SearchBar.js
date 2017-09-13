/**
 * Created by phuongla on 9/13/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSummit = this.handleSummit.bind(this);
    }

    handleChange(event) {
        const { value: term } = event.target;
        this.setState({ term });
    }

    handleSummit(event) {
        event.preventDefault();

        const { term } = this.state;
        const { fetchWeather } = this.props;
        fetchWeather(term);

        this.setState({ term: ''});
    }

    render () {
        const { term } = this.state;
        return (
            <form onSubmit={this.handleSummit} className="input-group">
                <input
                    placeholder="Get a five-day forecast in your favourite cities"
                    className="form-control"
                    value={term}
                    onChange={this.handleChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);