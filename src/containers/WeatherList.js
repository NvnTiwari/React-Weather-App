import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

class WeatherList extends Component {
    renderList(data) {
        const temps = data.list.map(weather => weather.main.temp);
        const pressures = data.list.map(weather => weather.main.pressure);
        const humidities = data.list.map(weather => weather.main.humidity);
        return (
            <tr key={data.city.name}>
                <td>{data.city.name}</td>
                <td>
                    <Sparklines height={20} width={50} data={temps}>
                        <SparklinesLine color="orange"/>
                        <SparklinesReferenceLine type="avg" />
                    </Sparklines>
                </td>
                <td>
                    <Sparklines height={20} width={50} data={pressures}>
                        <SparklinesLine color="green"/>
                        <SparklinesReferenceLine type="avg" />
                    </Sparklines>
                </td>
                <td>
                    <Sparklines height={20} width={50} data={humidities}>
                        <SparklinesLine color="blue"/>
                        <SparklinesReferenceLine type="avg" />
                    </Sparklines>
                </td>
            </tr>
            )
    }

    render() {
        if(this.props.weather.length == 0) {
            return (
                <h2>Please Select the city Name</h2>
                )
        }
        return (
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temprature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>

                    {this.props.weather.map(this.renderList)}
                </tbody>
            </table>
            );
    }
}

function mapStateToProps(state) {
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps)(WeatherList);