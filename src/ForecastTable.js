import React from 'react'

export default function ForecastTable(props) {
    const rows = props.forecasts.map((value) => {
        return <TableRow forecast={value} />
    })

    return (
        <table className="forecast-table">
            <thead>
            <tr>
                <th>Date/Time</th>
                <th>Cloudiness <span className="subscript">%</span></th>
                <th>Temperature <span className="subscript">°C</span></th>
                <th>Humidity</th>
                <th>Description</th>
                <th>Wind Speed <span className="subscript">m/s</span></th>
                <th>Wind Direction</th>
            </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

function TableRow(props) {
    const forecast = props.forecast;

    return (
        <tr>
            <td><span className="date">{forecast.getDate() }</span>
                <span className="hours">{forecast.getHours()}</span></td>
            <td>{forecast.getCloudinessIcon()}{forecast.getCloudiness()}</td>
            <td>{forecast.getTemperature()}</td>
            <td>{forecast.getHumidity()}</td>
            <td>{forecast.getDescription()}</td>
            <td>{forecast.getWindSpeed()}</td>
            <td>{forecast.getDirection()}</td>
        </tr>
    )
}