import React from 'react';

const SearcBox = (props) =>{
    return(
    <input 
    onChange = {props.searchChange}
    className = 'pa3 ba b--green bg-lightest-blue'
    type='search' 
    placeholder='search robots'
    />
    );
}

export default SearcBox;