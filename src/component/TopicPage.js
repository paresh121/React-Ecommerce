import { Route, Link, withRouter } from 'react-router-dom';
const TopicPage=({history})=>{
    return( 
        <div>
            <div>doing</div>
        <button onClick={()=>{history.push('/hats')}}></button>
        </div>
    ); 
}

export default TopicPage;