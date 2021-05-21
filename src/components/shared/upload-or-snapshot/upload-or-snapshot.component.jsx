import React from 'react'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { Component } from 'react';
import Popup from '../popup/popup.component';
import './upload-or-snapshot.styles.scss'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import ImageCapture from '../image-capture/image-capture.component';
import DocumentUploader from '../document-upload/document-upload.component';

class UploadOrSnapshot extends Component  {

    state = {
        popupOpen: false,
        imageSelected: false,
        documentSelected: false,
        imageData: null
    }
    
    captureDone = (imageData) => {
        this.setState({imageData: imageData});
        const {captureCompleteCallback} = this.props;
        if(captureCompleteCallback){
            captureCompleteCallback(imageData)
        }
        this.selectNone();
    }

    togglePopupOpen = () => {
        this.setState({imageSelected: false, documentSelected: false, popupOpen: true});
    }

    selectImage = () => {
        this.setState({imageSelected: true, documentSelected: false});
    }

    selectDocument = () => {
        this.setState({imageSelected: false, documentSelected: true});
    }

    selectNone = () => {
        this.setState({imageSelected: false, documentSelected: false, popupOpen: false});
    }

    render(){
        console.log(this.state)
        const {popupOpen, imageSelected, documentSelected, imageData} = this.state;
        return(
            <div className="uploader" >
                <div className="clickable-area" onClick={this.togglePopupOpen}>
                {imageData ? <img src={imageData} width='100%' height='100%'/> : 
                <div className="upload-action">
                    <AddPhotoAlternateIcon style={{fontSize: 100}} />
                    <span class="upload-text">{imageData ? 'UPDATE' : 'ADD'} IMAGE</span>
                </div>}
                </div>
                
                {!(imageSelected || documentSelected) ?
                <Popup popupOpen={popupOpen} cancel={this.selectNone} title='Files or Camera'>
                    <div className="option">
                        <CreateNewFolderIcon style={{ fontSize: 40 }} onClick={this.selectDocument}/>
                    </div>
                    <div className="option">
                        <AddAPhotoIcon style={{ fontSize: 40 }} onClick={this.selectImage}/>
                    </div>
                </Popup>: null}

                {imageSelected ?
                <Popup popupOpen={popupOpen} cancel={this.selectNone} title='Camera Capture'>
                    <ImageCapture cancelCapture={this.selectNone} returnImage={this.captureDone}/>
                </Popup>: null}

                {documentSelected ?
                <Popup popupOpen={popupOpen} cancel={this.selectNone} title='File Upload'>
                    <DocumentUploader cancelCapture={this.selectNone} returnImage={this.captureDone}/>
                </Popup>: null}
            </div>
        )
    }
}

export default UploadOrSnapshot;