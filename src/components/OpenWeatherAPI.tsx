import React, {FC, useEffect, useState} from 'react';
import {OPEN_WEATHER_API_KEY} from '../../config.js';
import {OpenWeatherInputForm} from './OpenWeatherInputForm.jsx';
import {Loader} from './Loader';



export const OpenWeatherAPI: FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [mainInfo, setMainInfo] = useState<string>('');
    const [cityName, setCityName] = useState<string>('');

    useEffect(() => getWeather('Moscow'), []);
    useEffect(() => {
        if (mainInfo) {
            console.log(`Weather in ${cityName} is ${mainInfo.temp} °C`);
        }
    }, [mainInfo])

    function getCityGeo(cityName: string) {
        setIsLoading(true);

        return fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${OPEN_WEATHER_API_KEY}`)
            .then(res => res.json())
            .then(data => {
                setIsLoading(false);
                setCityName(data[0].name);
                return [data[0].lat, data[0].lon];
            })
            .catch(err => {
                alert(err);
                setIsLoading(false);
            });
    }

    function getGeoWeather(lat: number, lon: number) {
        setIsLoading(true);

        return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${OPEN_WEATHER_API_KEY}`)
            .then(res => res.json())
            .then(data => {
                setMainInfo(data.main);
                setIsLoading(false);
                return mainInfo;
            })
            .catch(err => {
                alert(err);
                setIsLoading(false);
            });
    }

    function getWeather(cityName: string) {
        getCityGeo(cityName).then(([lat, lon]) => getGeoWeather(lat, lon));
    }

    return (
        <>
            <div className="weather-container">
                {isLoading ? <Loader /> : <p>{cityName}: {mainInfo.temp} °C</p>}
                <OpenWeatherInputForm getWeather={getWeather} />
            </div>
            <hr />
        </>
    );
}