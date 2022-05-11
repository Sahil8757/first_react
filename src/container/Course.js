import React, {useState} from 'react';

function Course(CouName) {

    // const[course, setcourse] = usestate(['Android','NodeJS','ReactJS','Flutter'])

    return (
        <div>
        {/* <p>{couse}</p> */}
        {
             CouName === "RNW1" ? <p>Android</p> : <p>NodeJS</p>
        }
        </div>
    );
}

export default Course;