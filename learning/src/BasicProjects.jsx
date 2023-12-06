
import { useRef, useState, useEffect} from "react";
import "./BasicProjects.css";
import { v4 as uuidv4 } from 'uuid';




export function HelloWorld({title="No Input Given By User In Props"}){
    return <h1>{title}</h1>;
    // return <h1> Hello World ! </h1>;
}

export function Counter(){
    const [count,setCount] = useState(0);

    const inc = ()=>{
        console.log("Increased");
        setCount((prevCount) => prevCount + 1);
    }

    const dec = ()=>{
        console.log("Decreased");
        setCount((prevCount) => prevCount - 1);
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={inc}>Increase (+)</button>
            <button onClick={dec}>Decrease (-)</button>
        </div>
    )
}

export function ToggleSwitch(){
    // const[state,setState] = useState(false);
    const bulb = useRef(null);
    

    const toggle = ()=>{
        // console.log("PrevState:",state);
        // setState(!state);
        console.log(bulb);
        if(bulb.current){
            if(bulb.current.style.backgroundColor === "yellow"){
                bulb.current.style.backgroundColor  = "black";
            }
            else{
                bulb.current.style.backgroundColor  = "yellow";
            }
        }
        // if(!state){
        //     bulb.current.style.backgroundColor  = "yellow";
        // }else{
        //     bulb.current.style.backgroundColor  = "black";
        // }
    }
    

    // useEffect(() => {
    //     console.log('Component is re-rendering');
    //   });

    

    return(
        <>
        <div className="box" ref={bulb}></div>
        <button onClick={toggle}>On/Off</button>
        </>

    )
}



export function UserList(params) {

    const[usersInfo,setUsersInfo] = useState([{name:"Abc",contact:"8736587",id:uuidv4()}]);
    const[currUserInfo,setUser] = useState({name:"",contact:""});
    
    const saveName = (event)=>{
        // console.log(event.target.value);
        setUser((prevInfo)=>({...prevInfo,name: event.target.value}));
    }
    const saveContact = (event)=>{
        setUser((prevInfo)=>({...prevInfo,contact: event.target.value}));
        // console.log(event.target.value);
    }

    const save = ()=>{
        console.log("saved!");
        currUserInfo.id = uuidv4();
        
        setUsersInfo([...usersInfo,currUserInfo]);
        setUser({name:"",contact:""});
    }

    return(
        <>
            <h1>Welcome to Contact List,Save & Enjoy Call</h1>
            <input type="text" placeholder="Enter a name" value={currUserInfo.name} onChange={saveName} /> <br />
            <input type="text" placeholder="Enter Contact Number" value={currUserInfo.contact} onChange={saveContact} /> <br />
            <button onClick={save}>Save</button>

            <div>
                <h1>Contact Numbers</h1>
                <ul>
                    {usersInfo.map((user)=>(
                        <li key={user.id}>
                            <span>{user.name}</span> &nbsp;&nbsp;
                            <span>{user.contact}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}