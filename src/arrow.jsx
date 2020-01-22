import React from 'react'
import './Component.css';


function Arrows(){
    return(
        <div id="arr">
<span className="previous-next"> {`<`}</span>
<span className="all-span"> 
<span className="small-span">{7}</span>
  </span>
    <span className="previous-next">{ `>`}</span> 
        </div>
    )
}
 
export default Arrows;