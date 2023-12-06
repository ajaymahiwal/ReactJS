
import {getTicket} from './helper.js';
import { Ticket } from './Ticket.jsx';
import { useState } from 'react';

export function Lottery({n=3,isWinningCond}){
    const[ticket,setTicket] = useState(getTicket(n));
    const isWin = isWinningCond(ticket);

    const buyTicket = ()=>{
        console.log("Buying !");
        setTicket(getTicket(n));
    }

    return (
        <div>
            <Ticket ticket={ticket}></Ticket>
            <br />
            {isWin && <h3>You Won a Lottery, Congratulations !!</h3>}
            <button onClick={buyTicket}>Buy Another Ticket</button>
        </div>
    )
}