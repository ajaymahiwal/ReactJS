
import './App.css';
import {sum} from'./helper.js';
import { Lottery } from './Lottery.jsx';

function App() {

  let n = 3;
  let isWinning = (ticket)=>{
    return sum(ticket) === 15;
  }

  return (
    <>
      <Lottery n={n} isWinningCond={isWinning}/>
    </>
  )
}

export default App
