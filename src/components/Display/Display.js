import { useSelector } from "react-redux";

function Display(){
    const count = useSelector((state)=>state.counter.count);
    return <div className="display">
        <h1>{count}</h1>
    </div>
}

export default Display;