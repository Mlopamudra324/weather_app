//1. input field = which type the input, which it needs to be searched
//2. search button =  which gets clicked and then all the data we get
//these are the below things which are need for api calls [
//useEffect
//promises
//async function
//try catch
// ]
//if dependecies array is empty then the whole function excute for the fisrt time when the page refreshed then it will not reexecuted when the page is refresh after that.


import React, { useEffect, useState, } from 'react';

import './style.css'
import WeatherDetails from './WeatherDetails';

function SearchMain() {

    const [searchTerm, setSearchTerm] = useState('mumbai');
    const [tempInfo, setTempInfo] = useState({}) //tempInfo is an empty object and here we grab all these values.

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value)
        console.log(searchTerm)
    }

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=1d0f0a36c994525d25b8f948fa90dd56`

            let res = await fetch(url);
            let data = await res.json();
            console.log(data)

            //here we will grab the data
            const { temp, humidity, pressure } = data.main;
            const { main: weatherType } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;

            //create an object where it contains all the data.
            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weatherType,
                name,
                speed,
                country,
                sunset
            };

            setTempInfo(myNewWeatherInfo)
        }
        catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        //here we write whatever we want to render, function
        getWeatherInfo()

    }, [])//this is dependecies array


    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input
                        type="search"
                        placeholder='Search city..'
                        id='search'
                        value={searchTerm}
                        onChange={handleOnChange} />
                </div>

                <button className="searchButton" onClick={getWeatherInfo}> Search</button>
            </div>

            {/* this is the weather details page */}
            {/* <WeatherDetails tempInfo = {tempInfo}/>  */}

            {/* spread operator spreads the value which is present inside an object */}
            <WeatherDetails {...tempInfo} />

        </>

    )
}

export default SearchMain