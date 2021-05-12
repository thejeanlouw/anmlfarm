import React from 'react';
import CustomButton from '../../../shared/custom-button/custom-button.component';
import FormInput from '../../../shared/form-input/form-input.component';
import './sign-in.styles.scss'
import {setCurrentUser} from '../../../../redux/user/user-actions'

import {connect} from 'react-redux'

import {signInWithGoogle, signInWithEmailAndPassword, createUserProfileDocument} from '../../../../firebase/firebase.functions'

class SignIn extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;
        try{
            await signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''});
        } catch (error) {
            console.error(error);
        }

    }
    
    handleChange = event =>{
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    googleClick = async event =>{
        signInWithGoogle().then(({user})=> {
            if(user){
                createUserProfileDocument(user);
            }
            this.props.setCurrentUser(user);
        });

    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} value={this.state.email} label='email' type='email' name='email' required/>
                    <FormInput handleChange={this.handleChange} value={this.state.password} label='password' type='password' name='password' required/>
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton isGoogleSignIn onClick={this.googleClick}>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapGlobalStateToProps = (state) => ({
    currentUser: state.user.currentUser 
});

const mapActionDispatchToProps = (dispatch) =>({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapGlobalStateToProps, mapActionDispatchToProps)(SignIn);