import React, {useState} from 'react';

function CountryFun({Gdp}) {
    const[country, setCountry] = useState('India');
    const[gdp, setGdp] = useState (0)

    const changecountry = () => {
        setCountry('UK')
    }

    return (
        <div>
        <p>Country:{country}</p>
        <button onClick = {() => changecountry()}>Change</button>
            
        <p>GDP:{gdp}</p>
        <button onClick = {() => setGdp(Gdp)}>Change GDP</button>
        </div>
    );
}

export default CountryFun;