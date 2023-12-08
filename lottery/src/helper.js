

export function sum(ticket){
    return ticket.reduce((sum,num)=> sum + num);
}

export function getTicket(n){
    let arr = new Array(n);
    for(let i=0;i<n;i++){
        arr[i] = Math.floor(Math.random()*10);
        // console.log(arr[i]);
    }
    return arr;
}