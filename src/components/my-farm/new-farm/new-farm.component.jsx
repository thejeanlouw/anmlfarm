import { dispatch } from 'd3-dispatch';
import React from 'react'
import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { createNewFarmAsync } from '../../../redux/farm-details/farm-details.actions';
import { selectCurrentUser } from '../../../redux/user/user.selectors';
import CustomButton from '../../shared/custom-button/custom-button.component';
import FormInput from '../../shared/form-input/form-input.component';
import UploadOrSnapshot from '../../shared/upload-or-snapshot/upload-or-snapshot.component';
import newFarmIcon from './Assets/new-farm.svg'
import './new-farm.styles.scss'


class NewFarm extends Component{

    state ={
        error: null,
        farmDetails: {}
    }

    handleSubmission = async event => {
        event.preventDefault();

        const {user, createNewFarmAsync, history} = this.props;

        if(!user) return;
        createNewFarmAsync({...this.state.farmDetails, creatingUserId: user?.uid})
        history.push('/farms/edit')
    }

    handleChange = async event =>{
        this.setState({farmDetails: {...this.state.farmDetails, 
            [event.target.name]: event.target.value}});
    }

    handleImageUploaded = (image) => {
        if(!image) return;
        this.setState({farmDetails: {...this.state.farmDetails, farmImage: image}});
    }

    componentDidMount(){
        const {user} = this.props;
        this.setState({farmDetails: {
            creatingUserId: user?.uid
        }})
    }

    render(){
        if(!this.props.user) return(
            <div>PLEASE LOG IN TO CREATE A FARM</div>
        );
        const {error, farmDetails: {displayName, farmCompanyName}} = this.state;
        return(
            
            <div className="new-farm">
                <div className="new-farm-intro">
                    <img src={newFarmIcon} />
                    <h2>WELCOME TO YOUR NEW FARM!</h2>
                    <span>Please provide us with some information about your farm:</span>
                    
                    <UploadOrSnapshot captureCompleteCallback={this.handleImageUploaded}/>
                </div>
                
                {error?<span className='error-message'>{error}</span>:null}
                <form className='new-farm-form' onSubmit={this.handleSubmission}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName ?? ''}
                        onChange={this.handleChange}
                        label='Display Name' 
                        required/>

                    <FormInput
                        type='text'
                        name='farmCompanyName'
                        value={farmCompanyName ?? ''}
                        onChange={this.handleChange}
                        label='Company Name' 
                        required/>

                    
                    <CustomButton
                        type='submit'>CREATE FARM</CustomButton>

                </form>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
})

const mapDispacthToProps = dispatch => ({
    createNewFarmAsync: farmDetails => dispatch(createNewFarmAsync(farmDetails))
})

export default connect(mapStateToProps, mapDispacthToProps)(withRouter(NewFarm));