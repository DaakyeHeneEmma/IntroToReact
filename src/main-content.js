import React from 'react'
import { Link } from 'react-router-dom';
import './Component.css'



function MainContent(){
    return(
        <div>
            <h3 className="content-text">
            Do you dream of <br />
            starting_your_own <br />
            business?
        </h3>
        <p>We typically invest in new business ideas with <br />
            large knowledge content.  </p>
            <Link to="../Trademark/anything"> <div id="more-btn">MORE</div></Link>
        </div>
     
    )
}
export default MainContent;