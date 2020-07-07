import React from 'react'
import { ow_api_key as key } from './index.js'
import ForecastInfo from './ForecastInfo.js';
import ForecastTable from './ForecastTable'

export default class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            city: null,
            country: null,
            forecasts: []
        };

        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleKeyDown(event) {
        if (event.keyCode === 13) {
            const input = event.target.value;

            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=${key}&units=metric&mode=json`, {mode: "cors"})
            .then(response => {
                return response.json();
            })
            .then(json => {
                console.log(json);

                let city = json.city.name;
                let country = json.city.country;
                /** @type {Array.<Object>} */
                let list = json.list;
                let forecasts = list.map((forecast) => {
                    return new ForecastInfo(forecast);
                });

                this.setState({
                    city: city,
                    country: country,
                    forecasts: forecasts
                });
            });
        }
    }

    render() {
        return (
            <div id="content">
                <header>
                    <h1>Weather App</h1>
                    <input type="text" name="city" placeholder="Search for a city..." onKeyDown={this.handleKeyDown} />
                </header>
                <div id="city-weather-container">
                    {this.state.city && 
                        <React.Fragment>
                            <h2>{`Search results for ${this.state.city}, ${this.state.country}`}</h2>
                            <ForecastTable forecasts={this.state.forecasts}/>
                        </React.Fragment>
                    }
                </div>
                <footer>
                    Weather API <a href="https://github.com/Lycanthoss/Weather-API">project</a> made by Rokas Simonavičius (<a href="https://github.com/Lycanthoss">GitHub</a>) using React.
                </footer>
            </div>
        );
    }
}