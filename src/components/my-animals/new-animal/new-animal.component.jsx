import { dispatch } from 'd3-dispatch';
import React from 'react'
import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { createNewAnimalAsync } from '../../../redux/animal-details/animal-details.actions';
import { selectCurrentCamp } from '../../../redux/camps/camps.selectors';
import { selectCurrentFarm } from '../../../redux/farm-details/farm-details.selectors';
import { selectCurrentUser } from '../../../redux/user/user.selectors';
import CustomButton from '../../shared/custom-button/custom-button.component';
import FormInput from '../../shared/form-input/form-input.component';
import UploadOrSnapshot from '../../shared/upload-or-snapshot/upload-or-snapshot.component';
import newAnimalIcon from './Assets/new-animal.svg'
import './new-animal.styles.scss'


class NewAnimal extends Component{

    state ={
        error: null,
        animalDetails: {}
    }

    handleSubmission = async event => {
        event.preventDefault();

        const {user, createNewAnimalAsync, history} = this.props;

        if(!user) return;
        createNewAnimalAsync({...this.state.animalDetails, creatingUserId: user?.uid})
        history.push('/camps/animals')
    }

    handleChange = async event =>{
        this.setState({animalDetails: {...this.state.animalDetails, 
            [event.target.name]: event.target.value}});
    }

    handleImageUploaded = (image) => {
        if(!image) return;
        this.setState({animalDetails: {...this.state.animalDetails, animalImages: [image]}});
    }

    componentDidMount(){
        const {user, farm, camp} = this.props;
        debugger;
        this.setState({animalDetails: {
            creatingUserId: user?.uid,
            farmId: farm?.farmId,
            campId: camp?.campId
        }})
    }

    render(){
        if(!this.props.user) return(
            <div>PLEASE LOG IN TO CREATE A ANIMAL</div>
        );
        const {error, animalDetails: {displayName, tagNumber, animalType, animalBreed}} = this.state;
        return(
            
            <div className="new-animal">
                <div className="new-animal-intro">
                    <img src={newAnimalIcon} />
                    <h2>CONGRATS ON YOUR NEW ANIMAL!</h2>
                    <span>Please provide us with some information about your animal:</span>
                    
                    <UploadOrSnapshot captureCompleteCallback={this.handleImageUploaded}/>
                </div>
                
                {error?<span className='error-message'>{error}</span>:null}
                <form className='new-animal-form' onSubmit={this.handleSubmission}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName ?? ''}
                        onChange={this.handleChange}
                        label='Display Name' 
                        required/>

                    <FormInput
                        type='text'
                        name='tagNumber'
                        value={tagNumber ?? ''}
                        onChange={this.handleChange}
                        label='Tag Number' 
                        required/>

                    <FormInput
                        type='text'
                        name='animalType'
                        value={animalType ?? ''}
                        onChange={this.handleChange}
                        label='Type of Animal' 
                        required/>

                    <FormInput
                        type='text'
                        name='animalBreed'
                        value={animalBreed ?? ''}
                        onChange={this.handleChange}
                        label='Breed of Animal' 
                        required/>

                    
                    <CustomButton
                        type='submit'>CREATE ANIMAL</CustomButton>

                </form>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
    camp: selectCurrentCamp,
    farm: selectCurrentFarm
})

const mapDispacthToProps = dispatch => ({
    createNewAnimalAsync: animalDetails => dispatch(createNewAnimalAsync(animalDetails))
})

export default connect(mapStateToProps, mapDispacthToProps)(withRouter(NewAnimal));