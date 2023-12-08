
import "./InfoBox.css";

export function InfoBox({info}){


    return(
        <>
          {info && 
                <div>
                    <h1>{info.name} Weather Updates</h1> 
                    <table border={1} cellSpacing={0}>
                        <tbody>
                        <tr>
                            <th> Country </th>
                            <td> {info.country} </td>
                        </tr>
                        <tr>
                            <th> City Latitude</th>
                            <td> {info.coord.lat} Deg N </td>
                        </tr>
                        <tr>
                            <th> City Longitude</th>
                            <td> {info.coord.lon} Deg E </td>
                        </tr>
                        <tr>
                            <th> Today Date </th>
                            <td> {info.today_date} </td>
                        </tr>
                        <tr>
                            <th> Curr Time </th>
                            <td> {info.today_curr_time} </td>
                        </tr>
                        <tr>
                            <th> Temp </th>
                            <td> {info.temp} </td>
                        </tr>
                        <tr>
                            <th> Feels Like </th>
                            <td> {info.feels_like} </td>
                        </tr>
                        <tr>
                            <th> Humidity </th>
                            <td> {info.humidity} </td>
                        </tr>
                        <tr>
                            <th> Max Temp </th>
                            <td> {info.temp_max} </td>
                        </tr>
                        <tr>
                            <th> Min Temp </th>
                            <td> {info.temp_min} </td>
                        </tr>
                        <tr>
                            <th> Wind Speed </th>
                            <td> {info.wind.speed} </td>
                        </tr>
                        <tr>
                            <th> Wind Degree </th>
                            <td> {info.wind.deg} </td>
                        </tr>
                        <tr>
                            <th> Weather Type </th>
                            <td> {info.type} </td>
                        </tr>
                        </tbody>
                        
                    </table>

                </div>
          }
        </>  
    );
}