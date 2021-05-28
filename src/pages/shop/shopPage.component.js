import React from 'react';
import SHOP_DATA from './shopData';
import CollectionPreview from '../../component/preview/collectionPreview';
class ShopPage extends React.Component{
    constructor(props){

        super(props);
        this.state={
            collection:SHOP_DATA
        };

    }
    render(){
        const {collection} =this.state;
        return(
            <div className="shop-page">
            {collection.map(({id,...others})=>{
                return(<CollectionPreview key={id} {...others}/>);
            })}
            </div>
        );
    }
}
export default ShopPage;