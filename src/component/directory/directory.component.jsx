import React from 'react';
import './directory.scss';
import MenuItem from '../menu-item/menu-item.component';
class Directory extends React.Component{
    constructor(){
        super();
        this.state = {
            sections: [
              {
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                Links:'shop'
              },
              {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                Links:'shop'
              },
              {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                Links:'shop'
              },
              {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                Links:'shop'
              },
              {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                Links:'shop'
              }
            ]
          };
        }

    render(){
        return(
            <div className="directory-menu">
              
                {
                this.state.sections.map(({id,...other_sections})=>{
                    return(<MenuItem key={id} {...other_sections} />);
                })}
            </div>
        );
    };

}
export default Directory ;