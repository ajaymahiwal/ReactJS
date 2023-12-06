
import {TicketNum} from "./TicketNum.jsx";

export function Ticket({ticket}){
    return(
        <div>
            <h1>Ticket</h1>
            {ticket.map((num,idx)=>(
                <TicketNum num={num} key={idx}></TicketNum>
            ))}
        </div>
    )
}