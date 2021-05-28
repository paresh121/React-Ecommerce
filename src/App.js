import logo from './logo.svg';
import Header from './component/Header/header.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage.component';
import SignInUp from './pages/Sign/signin.component';
import ShopPage from'./pages/shop/shopPage.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import SignInAndSignUp from './component/signInAndSignUp/signInAndSignUp.component';
import React from 'react';
import {connect} from 'react-redux';
import { setCurrentUser } from  './redux/user/user-action';
class App extends React.Component{
  // constructor(props){
  //   super(props);
  //   this.state={currentUser:null};
  // }
  unsubscribeFromAuth=null;
  // componentDidMount(){
  //   this.unsubscribeFromAuth=auth.onAuthStateChanged( user=>{
  //     this.setState({currentUser:user});
  //     console.log(user);
  //   }

  //   );
  // }
  componentDidMount(){
    const {setCurrentUser}=this.props;
    this.unsubscribeFromAuth=auth.onAuthStateChanged( async user=>{
      if(user){
        const userRef = createUserProfileDocument(user);
        (await userRef).onSnapshot(snapShot=>{
          setCurrentUser({
            id: snapShot.id, ...snapShot.data()
        })
        })
      }
      // this.setState({currentUser:user});
      setCurrentUser(user);
    }

    );
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  
  render(){
  return (
      <body>
        <h2>The site is under construction( frontend, firebase and user authentication is implemented )</h2>
        <div className="App">
              <Header/>
              <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/shop" component={ShopPage}/>
                     <Route exact path="/signin" render={()=>this.props.currentUser?<Redirect to="/"/>:<SignInAndSignUp/>}/>
              </Switch>
        </div>
        </body>
    );
  }
}
const mapStatesProps=state=>(
  {
    currentUser:state.user.currentUser,
  }
);
const mapDispatchToProps= dispatch=>(
  {
    setCurrentUser:user=> dispatch(setCurrentUser(user))
  }
);
export default connect(mapStatesProps,mapDispatchToProps) (App);
// const HatsPage=()=>{
//     return(<div>Hats</div>);
// }
//  const HomePage=(props)=>{
//     console.log(props);
//   return( 
//     <div>
//     <button onClick={()=>{props.history.push("/Topic");}}>click</button>
//     <div>HomePage</div>
//     </div>
//   );
//  }
// const Topic=(props)=>{
//   console.log(props);
//   return(
//     <div>
//     <Link to={props.match.url+"/13"}>to 13</Link>
//     <div>Topic</div>
//     </div>  
//     ); 
//  }
//  const TopicWise=(props)=>{
//   console.log(props);
//   return(
//     <div>TopicWise: {props.match.params.TopicId}</div>  
//     ); 
// }