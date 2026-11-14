import SearchBox from "./searchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";


export default function WeatherApp (){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Pune",
        temp: 31.75,
        tempMin: 30.22,
        tempMax: 31.75,
        humidity: 26,
        feelsLike: 30.15,
        weather: "Overcast Clouds"
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return(
        <div>
            <h2 className='title'>Weather API Mini Project</h2>
            <br />
            <SearchBox updateInfo={updateInfo}/>
            <br/><br />
            <InfoBox info={weatherInfo}/>
        </div>
    );
}