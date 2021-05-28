import './menu-item.scss';
import {withRouter} from 'react-router-dom';
const MenuItem=({title, imageUrl, size, history, match, Links })=>{
  return(
    <div className={`${size} menu-item`} onClick={()=>{history.push(match.url+Links)}}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
  );

}
export default withRouter(MenuItem);