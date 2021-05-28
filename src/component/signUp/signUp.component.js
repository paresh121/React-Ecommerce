import React from 'react';
import FormInput from"../FormInput/formInput.component";
import CustomButton from '../customButton/customButton.component';
import {auth,  createUserProfileDocument} from '../../firebase/firebase.utils';
class SignUp extends React.Component{
    constructor(){
        super();
        this.state={
            'email':'',
            'displayName':'',
            'password':'',
            'confirmPassword':''
        }

    }
    handleChange=event=>{
        const {name, value}=event.target;
        console.log(`name is ${name} and value is ${value}`);
        this.setState({[name]:value});
    }
    handleSubmit= async event =>{
        event.preventDefault();
        const { email, displayName, password, confirmPassword}=this.state;
        if(password!=confirmPassword){
            alert("password don't match");
            return;
        }
        console.log(`user ${displayName}`);
        const { user }= await auth.createUserWithEmailAndPassword(email, password)

        try {
            await createUserProfileDocument(user, { displayName} )
            this.setState({
                email:'',
                displayName:'',
                password:'',
                confirmPassword:'' 
            }               
            );
        } catch (error) {
            console.log('not able to signup');
        }

    }
    render(){
        const {email, displayName, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
            <h2 className='title'>I do not have account</h2>
            <form onSubmit={this.handleSubmit}>
            <FormInput label='Name' name='displayName' type="text" value={displayName}   handleChange={this.handleChange} required/>
            <FormInput label='Email' name='email' type="email" value={email}   handleChange={this.handleChange} required/>
            <FormInput label='Password' name='password' type="password" value={password}   handleChange={this.handleChange} required/>
            <FormInput label='Confirm Password' name='confirmPassword' type="password" value={confirmPassword}   handleChange={this.handleChange} required/> 
            <CustomButton type="submit">SignUp</CustomButton>
            </form>
            </div>
        );
    }
}
export default SignUp;