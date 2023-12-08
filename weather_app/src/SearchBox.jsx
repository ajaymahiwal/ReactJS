
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css";

export function SearchBox({updateWeatherInfo}){

    let [city,setCity] = useState("");
    let [error,setError] = useState("");

    function handleInput(event){
        setCity(event.target.value);
        console.log(city);
    }

    function handleSubmit(event){
        console.log("Form Submitted !");
        event.preventDefault();
        setCity("");
        getWeatherInfo();
    }

    async function getWeatherInfo(){
        try{
            console.log("Getting Weather Info");
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9722f44995e9e8e1e7ad2db1db56b565&units=metric`);

        let result = await res.json();

        if(result.cod && result.message){
            setError(result);
        }else{
            setError("");
        }
        console.log(result);
        updateWeatherInfo({
            name:result.name,
            country:result.sys.country,
            temp:result.main.temp,
            feels_like:result.main.feels_like,
            humidity:result.main.humidity,
            temp_max:result.main.temp_max,
            temp_min:result.main.temp_min,
            today_date:new Date().toLocaleDateString(),
            today_curr_time:new Date().toLocaleTimeString(),
            wind:result.wind,
            type:result.weather[0].description,
            coord: result.coord,
        });
        }
        catch(err){
            console.log("error");
            updateWeatherInfo("");
        }

    }



    return(
        <>
            <h1 className='title'>Weather App</h1>
            <br />
            <br />
            <form action="" onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Enter City Name" variant="outlined" required onChange={handleInput} value={city}/>
                <br />
                <br />
                <Button variant='contained' color='success' type="submit">Search Now !</Button>
            </form>
            {/* {error && <h2>{error.message}</h2>} */}
            {error && <h2>City Not Found | 404 Error</h2>}
        </>
    )
}