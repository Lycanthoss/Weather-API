import React from 'react'

import { ReactComponent as Cloudy } from './cloudy.svg'
import { ReactComponent as Sunny } from './sunny.svg'
import { ReactComponent as Breakthrough } from './breakthrough.svg'

export default function ForecastInfo(forecast) {
    this.date = new Date(forecast["dt_txt"]);
    this.clouds = forecast.clouds.all;
    this.temp = forecast.main.temp;
    this.humidity = forecast.main.humidity;
    /** @type {string} */
    this.description = forecast.weather[0].description;
    this.windSpeed = forecast.wind.speed;
    this.windDirection = forecast.wind.deg;
}

ForecastInfo.prototype.getDate = function() {
    return this.date.toDateString();
}
ForecastInfo.prototype.getHours = function() {
    let date;
    const hours = parseInt(this.date.getHours());

    if (hours < 10) {
        date = "0" + hours + ":00";
    }
    else {
        date = hours + ":00";
    }

    return date;
}
ForecastInfo.prototype.getCloudiness = function() {
    return this.clouds + "%";
}
ForecastInfo.prototype.getTemperature = function() {
    return this.temp + "°C";
}
ForecastInfo.prototype.getHumidity = function() {
    return this.humidity + "%";
}
ForecastInfo.prototype.getDescription = function() {
    let description = this.description[0].toUpperCase() + this.description.slice(1, this.description.length);

    return description;
}
ForecastInfo.prototype.getWindSpeed = function() {
    return this.windSpeed + "m/s";
}
ForecastInfo.prototype.getDirection = function() {
    const dir = parseInt(this.windDirection);
    if (dir === 0) {return "North";}
    else if (dir > 0 && dir < 90) {return "North-East";}
    else if (dir === 90) {return "East"}
    else if (dir > 90 && dir < 180) {return "South-East"}
    else if (dir === 180) {return "South"}
    else if (dir > 180 && dir < 270) {return "South-West"}
    else if (dir === 270) {return "West"}
    else if (dir > 270 && dir < 360) {return "North-West"}
    else return "North";
}
ForecastInfo.prototype.getCloudinessIcon = function() {
    if (this.clouds >= 0 && this.clouds < 25) {
        return <Sunny className="svg-icon" />
    }
    else if (this.clouds >= 25 && this.clouds < 50) {
        return <Breakthrough className="svg-icon" />
    }
    else return <Cloudy className="svg-icon" />
}