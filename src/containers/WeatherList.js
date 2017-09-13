/**
 * Created by phuongla on 9/13/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

    constructor(props) {
        super(props);
        this.renderWeather = this.renderWeather.bind(this);
    }

    renderWeather({ city, list }) {
        const { name } = city;
        return (
            <tr key={name}>
                <td>{name}</td>
            </tr>
        );
    }

    render () {
        const { cities } = this.props;
        console.log('cities', cities);

        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {cities.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weatherReducer }) {
    const { cities } = weatherReducer;
    return { cities };
}

export default connect(mapStateToProps)(WeatherList);
