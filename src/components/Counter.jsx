import { useState, useEffect } from "react";
import axios from "axios";

const Counter = () => {
    const [count, setCount] = useState(0);

    function countMinus(){
        setCount(count - 1);
    }

    const getData = async () => {
        const {data} = await axios("https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json");
        console.log(data);
    }

    useEffect(()=> {
        // Mounting
        getData();
        console.log("render!")
        document.body.style.background = "salmon"

        //Unmounting
        return ()=> {
            document.body.style.background = "white"
        }
        // updating
    }, [count])

    return (
        <>
            <button onClick={countMinus}>minus</button>
            {count}
            <button onClick={() => setCount(count + 1)}>plus</button>
        </>
    )
}

export default Counter;