import React from 'react';
import { Link } from 'react-router-dom'

const Portfolio = (props) => {
    return (
        <div>
            <h3>This is from my Portfolio component</h3>
            <p>Check my work</p>
            <Link to="/portfolio/1"> 1 </Link>
            <Link to="/portfolio/2"> 2 </Link>
        </div>
    )
}

export default Portfolio;