import React from 'react';
import './sign-up.styles.scss'

import FormInput from '../../../shared/form-input/form-input.component'
import CustomButton from '../../../shared/custom-button/custom-button.component'

import {createUserProfileDocument, createUserWithEmailAndPassword} from '../../../../firebase/firebase.functions'

export default class Signup extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
            error: ''
        }
    }

    handleSubmission = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;
        if(password!==confirmPassword){
            alert('Passwords don\'t match');
            return;
        }
        try{
            const createResponse = await createUserWithEmailAndPassword(email, password);
            const {user} = createResponse;
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
                error: ''
            })
        } catch (error){
            this.setState({error: error.message})
            console.error(error);
        }

    }

    handleChange = async event =>{
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        const {displayName, email, password, confirmPassword, error} = this.state;
        return (
            <div className='sign-up'>
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <span className='error-message'>{error}</span>
                <form className='sign-up-form' onSubmit={this.handleSubmission}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name' 
                        required/>
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email' 
                        required/>
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password' 
                        required/>
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confitm Password' 
                        required/>
                    <CustomButton
                        type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}
