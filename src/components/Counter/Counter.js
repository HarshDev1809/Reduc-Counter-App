import CounterBtn from "../CounterBtn/CounterBtn";
import Display from "../Display/Display";


function Counter(){
    return <div className="counter">
        <Display />
        <CounterBtn/>
    </div>
}

export default Counter;