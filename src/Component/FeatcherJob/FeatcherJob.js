import React from 'react';
import { Link } from 'react-router-dom';
import "./FeatcherJob.css";

const FeatcherJob = () => {
const feactcherJob = [
    {
        img:"",
        title:"it is tiel",
        dec:"this is dec",
        location: "bangladesh",
        sellery: "100k",
        btn1:"hi",
        btn2: "hello"
    },
    {
        img:"",
        title:"it is tiel",
        dec:"this is dec",
        location: "bangladesh",
        sellery: "100k",
        btn1:"hi",
        btn2: "hello"
    },
    {
        img:"",
        title:"it is tiel",
        dec:"this is dec",
        location: "bangladesh",
        sellery: "100k",
        btn1:"hi",
        btn2: "hello"
    },
    {
        img:"",
        title:"it is tiel",
        dec:"this is dec",
        location: "bangladesh",
        sellery: "100k",
        btn1:"hi",
        btn2: "hello"
    },
]

    return (
        <div>
            <h1>this is FeatcherJob</h1>
            <p>lorem section is t </p>

            <div className='featcher-main'>
            {
            feactcherJob.map(mainJob =>{
            return(
                     <div className='featcher-card'>
                        <h1>{mainJob.title}</h1>
                        <h1>{mainJob.dec}</h1>
                        <h1>{mainJob.location}</h1>
                       <Link to="/blog"> <button>{mainJob.btn1}</button></Link>
                        <button>{mainJob.btn1}</button>

                      </div>
                     )
})
            }
            </div>
        </div>
    );
};

export default FeatcherJob;