import React from 'react';

const Card = ({id, name, email}) => {
    return (
        <div className='bg-light-green dib br3 ma2 grow bw2 shadow-5'>
            <img alt="robots" src='https://robohash.org/test'/>
            <div>
                <h2> {name} </h2>
                <p>{email}</p>
            </div>            
        </div>
    )
}

export default Card;