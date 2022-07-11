import React, { useEffect, useReducer } from 'react'
import reducerCity from '../reducers/Reducers'
import { reducerSelCity } from '../reducers/Reducers';




const reducerShowWeather = (state, { type, weatherDetail }) => {
    switch (type) {
        case 'SHOW_WEATHER':
            return weatherDetail
        default: return state

    }
}


const Weather = () => {

    const [inputType, dispatchCity] = useReducer(reducerCity, '')
    const [selectedCity, dispatchSelCity] = useReducer(reducerSelCity, 'delhi')
    const [weatherData, dispatchWeather] = useReducer(reducerShowWeather, '')


    useEffect(() => {
        const weatherAPIData = async () => {
            try {
                let url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&units=metric&appid=2d09fd0d294278c0015aecacf7df42dd`
                const res = await fetch(url);
                const data = await res.json();
                // console.log(data)
                const { temp, humidity, temp_max, temp_min } = data.main;
                const weath = data.weather[0].main;
                const wind = data.wind.speed;
                const time = new Date().toLocaleTimeString();
                // console.log(time);
                const allExtractData = {
                    temp, humidity, temp_max, temp_min, weath, wind, time
                }


                dispatchWeather({ type: 'SHOW_WEATHER', weatherDetail: allExtractData })
            } catch (error) {
                alert("Cann't find....")
            }
        }
        weatherAPIData()
    }, [selectedCity])

    return (
        <>
            <h3 className="text-center pt-5 mb-3">Live Weather Report</h3>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-4 col-sm-12 col-xs-12">
                        <div className="card-weather p-4">
                            <div className="search-wrap">
                                <div className="input-group mb-3">
                                    <input type='text' name='city' value={inputType} placeholder='Enter any...' onChange={(e) => dispatchCity({ type: 'INPUT_TYPE', element: e })} />
                                    <div className="input-group-append">
                                        <button className="btn btn-danger" type="submit" onClick={() => dispatchSelCity({ type: 'SELECT_CITY', payload: inputType })}>Go</button>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex">
                                <h6 className="flex-grow-1 default-city">{selectedCity}</h6>
                                <h6>{weatherData.time}</h6>
                            </div>
                            <div className="d-flex flex-column temp mt-5 mb-3">
                                <h1 className="mb-0 font-weight-bold" id="heading"> {weatherData.temp}° C </h1> <span className="small grey">{weatherData.weath}</span>
                            </div>
                            <div className="d-flex">
                                <div className="temp-details flex-grow-1">
                                    <p className="my-1">  <span>{weatherData.temp_min - 5} - {weatherData.temp_max}  </span> </p>
                                    <p className="my-1"> <img src="https://i.imgur.com/B9kqOzp.png" height="17px" alt="weather" /> <span> {weatherData.wind} km/h </span> </p>
                                    <p className="my-1"> <i className="fa fa-tint mr-2" aria-hidden="true"></i> <span> {weatherData.humidity}% </span> </p>

                                </div>
                                <div> <img src="https://i.imgur.com/Qw7npIg.png" width="100px" alt="weathers" /> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Weather
