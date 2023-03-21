export interface IWeatherMain {
    temp: number;
}

export interface IWeather {
    main: IWeatherMain;
}

export interface IGeocoding {
    cityName: string;
}