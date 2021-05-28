import React from 'react';
import { Route, Link } from 'react-router-dom';
import TopicPage from './TopicPage';
const HomePage=(props)=>{
    console.log(props);
    return( 
        <div>
        <div>HomePage</div>
        {<TopicPage/>}
        </div>
    ); 
}
export default HomePage;