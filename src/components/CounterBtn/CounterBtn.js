import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../../redux/counter/counterSlice";
import Display from "../Display/Display";


function CounterBtn(){
    const [step,setStep] = useState(1);
    const count = useSelector((state)=> state);
    console.log(count);

    const dispatch = useDispatch();
    console.log(dispatch);
    const updateStep = (e)=>{
        console.log(e)
        setStep(e.target.value);
        console.log(step)
    }

    useEffect(()=>{
        console.log(step)
    },[step]);

    return <div className="counter-btn">
        <input type="number" onChange={updateStep} />
        <button type="button" onClick={()=> dispatch(incrementByAmount(Number(step)))}>step</button>
        <button type="button" onClick={()=> dispatch(decrement())}>-</button>
        <button type="button" onClick={()=> dispatch(increment())}>+</button>

    </div>
}

export default CounterBtn;