import React, {useState} from 'react';

function CityFun(props) {
    const[city, setCity] = useState('Baroda');
    const[gdp, setGdp] = useState (0)

    const changecity = () => {
        setCity('Delhi')
    }

    return (
        <div>
        <p>City:{city}</p>
        <button onClick = {() => changecity()}>Change</button>
            
        <p>GDP:{gdp}</p>
        <button onClick = {() => setGdp(5.5)}>Change GDP</button>
        </div>
    );
}

export default CityFun;