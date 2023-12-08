
import { useState } from "react";
import { SearchBox } from "./SearchBox";
import { InfoBox } from "./InfoBox";


export function WeatherApp(){

    let[weatherInfo,setWeatherInfo] = useState("");
    
    // console.log("Weather Info",weatherInfo);
    let updateInfo = (result) =>{
        setWeatherInfo(result);
    }

    return(
        <>
            <SearchBox updateWeatherInfo={updateInfo}></SearchBox>
            {weatherInfo && <InfoBox info={weatherInfo}></InfoBox>}
        </>
    )
}