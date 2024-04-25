import React, { useState, useEffect } from 'react'

function WeatherDetails(
    // { temp,
    //     humidity,
    //     pressure,
    //     weatherType,
    //     name,
    //     speed,
    //     country,
    //     sunset }
    // then the above one is used dynamically
    myNewWeatherInfo
) {
    const [weatherState, setWeatherState] = useState('');

    useEffect(() => {
        if (myNewWeatherInfo.weatherType) {
            switch (myNewWeatherInfo.weatherType) {
                case "Clouds":
                    setWeatherState("wi-day-cloudy");
                    break;

                case "Haze":
                    setWeatherState("wi-fog");
                    break;

                case "Clear":
                    setWeatherState("wi-day-sunny");
                    break;

                case "Mist":
                    setWeatherState("wi-dust");
                    break;

                case "Rain":
                    setWeatherState("wi-day-rain");
                    break;

                default:
                    setWeatherState("wi-day-sunny");
                    break;
            }
        }
    }, [myNewWeatherInfo.weatherType])

    //converting the seconds in time
    let sec = myNewWeatherInfo.sunset;
    let date = new Date(sec * 1000);
    let timestr = `${date.getHours()}:${date.getMinutes()}`
    return (
        <div>
            <article className='widget'>
                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                </div>

                {/* weather info */}
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{myNewWeatherInfo.temp}&deg;</span>
                    </div>

                    <div className="description">
                        <div className="weatherCondition">
                            {myNewWeatherInfo.weatherType}
                        </div>

                        <div className="place">
                            {myNewWeatherInfo.name}, {myNewWeatherInfo.country}
                        </div>
                    </div>
                </div>

                {/* date */}
                <div className="date">{new Date().toLocaleString()}</div>

                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>

                            <p className="extra-info-leftside">
                                {timestr}PM <br />
                                Sunset
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>

                            <p className="extra-info-leftside">
                                {myNewWeatherInfo.humidity}<br />
                                Humidity
                            </p>
                        </div>
                    </div>
                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-rain"}></i>
                            </p>

                            <p className="extra-info-leftside">
                                {myNewWeatherInfo.pressure}<br />
                                Pressure
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-strong-wind"}></i>
                            </p>

                            <p className="extra-info-leftside">
                                {myNewWeatherInfo.speed}<br />
                                Speed
                            </p>
                        </div>
                    </div>
                </div>

            </article >
        </div >
    )
}

export default WeatherDetails