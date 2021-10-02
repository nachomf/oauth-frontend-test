//useState hook

import { useState } from "react"

export default  function Calculator(){
    //total is the state and setTotal is the setter, if the useState has a parameter then that is de initial value
    const [total, setTotal] = useState(0);
    
    return (
        <div>
            <p>the number is {total}</p>
            <button onClick={() => setTotal(total + 1)}>+1</button>
            <button onClick={() => setTotal(total + 2)}>+2</button>
            <button onClick={() => setTotal(total * 5)}>*5</button>
            <button onClick={() => setTotal(total * -1)}>Negated</button>
            <button onClick={() => setTotal(0)}>Clear</button>
        </div>
        )
}