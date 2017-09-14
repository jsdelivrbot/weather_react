/**
 * Created by phuongla on 9/13/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChartItem from '../components/ChartItem';

class WeatherList extends Component {

    constructor(props) {
        super(props);
        this.renderWeather = this.renderWeather.bind(this);
    }

    renderWeather({ city, list }) {
        const { name } = city;
        const temps = list.map((item) => { return item.main.temp });
        const humidities = list.map((item) => { return item.main.humidity });
        const pressures = list.map((item) => { return item.main.pressure });

        console.log('humidities: ', humidities);
        console.log('pressures: ', pressures);

        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <ChartItem data={temps} color="orange" />
                </td>
                <td>
                    <ChartItem data={pressures} color="blue" />
                </td>
                <td>
                    <ChartItem data={humidities} color="green" />
                </td>
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
