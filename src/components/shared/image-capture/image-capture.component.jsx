import React, {useState} from 'react'
import { connect } from 'react-redux'
import Webcam from 'react-webcam'
import CustomButton from '../custom-button/custom-button.component'
import './image-capture.styles.scss'

const videoConstraints = {
    width: 800,
    height: 800
}

const ImageCapture = ({returnImage, cancelCapture}) => {

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
    }

    const closeAll = () => {
        cancelCapture();
    }
    
    return (
        <div className="image-capture">
            {image ? 
            <img src={image} />:
            <Webcam
                audio={false}
                width='50%'
                height='50%'
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


export default ImageCapture;