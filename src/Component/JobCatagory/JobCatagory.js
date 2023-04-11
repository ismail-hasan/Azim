import React from 'react';
import "./JobCatagory.css";

const JobCatagory = () => {
    const jobData =[
        {
            img:"",
            title:"This is title",
            dec:"this is dc"
        },
        {
            img:"",
            title:"This is title",
            dec:"this is dc"
        },
        {
            img:"",
            title:"This is title",
            dec:"this is dc"
        },
        {
            img:"",
            title:"This is title",
            dec:"this is dc"
        }
    ]
    return (
        <div className='job-catagory'>
            <h1>job catagory list</h1>
            <p>this is job list</p>

           <div className='main-job'> 
           {
                jobData.map(job => {
                    return (
                        <div className='job-card'>
                            <h2>{job.title}</h2>
                            <h2>{job.dec}</h2>
                        </div>
                    )
                })
            }
           </div>

        </div>
    );
};

export default JobCatagory;