import React,{ useState } from "react";
import Course from "./Course";

function Branch(props) {

    // const{Branch, setBranch} = useState({'RNW1','RNW2','RNW3','RNW4'});
    const [Branch, setBranch] = useState('RNW1');
    const [course, setCourse] = useState(['Android','NodeJS','ReactJS','Flutter']);

    const courseName = () => {
        setBranch('Rnw2')
        setCourse('Android')
    }

    return (
        <div>
        <p>{Branch}</p>
        <Course CouName={Branch}/>
        <button onClick={() => courseName()}>Change</button>
            
        </div>
    );
}

export default Branch;