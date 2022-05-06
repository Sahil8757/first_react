import React, {useState} from 'react';

function CityFun(props) {
    const[country, setCountry] = useState('india');
    const[city, setCity] = useState ("surat")

    const changeCountry = () => {
        setCountry('US')
        setCity('New York')
    }

    return (
        <div>
        <p>Country:{country}</p>
        <p>City:{city}</p>
        <button onClick = {() => changeCountry()}>Change</button>
        <br/>
        </div>
            
       
    );
}

export default CityFun;