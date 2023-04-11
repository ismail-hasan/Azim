import React from 'react';
import FeatcherJob from '../FeatcherJob/FeatcherJob';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import JobCatagory from '../JobCatagory/JobCatagory';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <JobCatagory></JobCatagory>
            <FeatcherJob></FeatcherJob>
        </div>
    );
};

export default Layout;