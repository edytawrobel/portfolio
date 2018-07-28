import React from 'react';

const PortfolioItemPage = (props) => {
    return (
        <div>
            <p>One of the projects: { props.match.params.id }</p>
        </div>
    )
}


export default PortfolioItemPage;