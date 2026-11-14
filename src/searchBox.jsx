import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchBox.css'
import { useState } from 'react';


export default function SearchBox({updateInfo}){

    let [city, setCity] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "fc37ddd5d84925b1526ec09d89772b12";

    let getWeatherInfo = async () =>{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result = {
            city : city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
    };

    let handleChange = (event) =>{
        setCity(event.target.value);
    };

    let handleSubmit = async (event) =>{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
    };
    return(
        <div>
        <br />
        <form onSubmit={handleSubmit}>
        <h2>Enter Name of the City</h2>
        <br />
        <TextField id="city" label="City Name" 
        sx={{
                "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "white" },
                "&:hover fieldset": { borderColor: "white" },
                "&.Mui-focused fieldset": { borderColor: "white" },
                },
                "& .MuiInputLabel-root.Mui-focused": { color: "white" },
            }}
        variant="outlined"
        required
        value={city}
        className='input'
        onChange={handleChange}
        />
        <br /><br /><br />
        <Button variant="contained" type='submit' sx={{
            bgcolor: "purple",
            color: "white",
            "&:hover": {
            bgcolor: "darkviolet",
            },
        }}>
        Send
        </Button>
        </form>
        </div>
    );
}