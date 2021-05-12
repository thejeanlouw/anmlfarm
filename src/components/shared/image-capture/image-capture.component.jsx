import React, {useState} from 'react'
import { connect } from 'react-redux'
import Webcam from 'react-webcam'
import CustomButton from '../custom-button/custom-button.component'
import './image-capture.styles.scss'
import {togglePopupFalse, toggleDrawerFalse} from '../../../redux/controls/page-controls/page-controls-actions'


const videoConstraints = {
    width: 800,
    height: 800
}

const ImageCapture = ({returnImage, togglePopupFalse, toggleDrawerFalse}) => {

    const [webcam, setWebcam] = useState(null);
    const [image, setImage] = useState(null);

    const setRef = (webcam) =>{
        if(webcam) setWebcam(webcam);
    }

    const capture = () => {
        setImage(webcam.getScreenshot());
    }

    const retry = () => {
        setImage(null);
    }

    const saveCapture = () => {
        if(image){ returnImage(image);}
        closeAll();
    }

    const closeAll = () => {
        togglePopupFalse();
    }
    
    return (
        <div className="image-capture">
            {image ? 
            <img src={image} />:
            <Webcam
                audio={false}
                width={window.innerWidth/2}
                height={window.innerHeight/2}
                ref={setRef}
                screenshotFormat='image/jpeg'
                videoConstraints={videoConstraints}
            />}
            {image? <div className="buttons">
                <CustomButton onClick={saveCapture}>Save</CustomButton> 
                <CustomButton onClick={retry}>Retry</CustomButton> 
                <CustomButton onClick={closeAll}>Cancel</CustomButton> 
            </div> :
            <CustomButton onClick={capture} >Capture</CustomButton> }
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    togglePopupFalse: () => dispatch(togglePopupFalse()),
    toggleDrawerFalse: () => dispatch(toggleDrawerFalse())
})

export default connect(null, mapDispatchToProps)(ImageCapture)