import React from 'react';
import './sign.scss';
import FormInput from"../FormInput/formInput.component";
import CustomButton from '../customButton/customButton.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';
class Sign extends React.Component{
    constructor(props){
        super(props);
        this.state={
            'email':'',
            'password':'',
        }
    }
    handleChange= event =>{
        const {value, name}=event.target;
        console.log(`name is ${name} and value is ${value}`);
        this.setState({[name]:value});
    }

    handleSubmit= async event =>{
        event.preventDefault();
        
        const {email, password}=this.state;
        console.log(this.state);
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({'email':'', 'password':''})
        } catch (error) {
            console.log("not able to sign in ");
        }

    }
    render(){
        return(
            <div className="sign-in">
                <form onSubmit={this.handleSubmit}>
                    <FormInput label='Email' name='email' type="email" value={this.state.email}   handleChange={this.handleChange} required/>
                    <FormInput label='Password' name='password' type="password" value={this.state.password}   handleChange={this.handleChange} required/>               
                    <CustomButton type="submit">SignIn</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                    Sign in with Google
                  </CustomButton>
                </form>
            </div>
        )
    }
}
export default Sign;