import React, {Component} from 'react'
import Files from 'react-butterfiles';
import CustomButton from '../custom-button/custom-button.component';

class DocumentUploader extends Component {
 //({returnDocuments, cancelUpload}) => 

    state = {
        files: [],
        errors: []
    }

    setFiles = (files) => {
        this.setState({ files })
    }


    saveCapture = () => {
        const {returnImage} = this.props;
        const {files} = this.state;
        if(files && files[0] && files[0].src && returnImage){ returnImage(files[0].src.base64);}
    }

    closeAll = () => {
        const {cancelCapture} = this.props;
        if(cancelCapture) cancelCapture();
    }

    render(){
        const {files} = this.state;
        const hasImage = (files && files[0] && files[0].src && files[0].src.base64);
        return(
            <Files
                multiple={false} 
                maxSize="2mb"
                multipleMaxSize="10mb"
                multipleMaxCount={3}
                convertToBase64={true}
                accept={["image/png","image/jpg","image/jpeg"]}
                onSuccess={files => this.setFiles(files)}
                onError={errors => this.setState({ errors })}
            >
                {({ browseFiles, getDropZoneProps, getLabelProps }) => (
                    <>
                        {/* <label {...getLabelProps()}>Your files</label> */}
                        <div {...getDropZoneProps({ className: "myDropZone" })}/>
                        
                        {this.state.files.map(file => (
                                <div className="uploaded-image">
                                    <img src={file.src.base64} width='100%' height='100%'/>
                                </div>
                            ))}
                        <ol>
                            {this.state.errors.map(error => (
                                <li key={error.file.name}>
                                    {error.file.name} - {error.type}
                                </li>
                            ))}
                        </ol>
                        
                        {hasImage ? <div className="buttons">
                                    <CustomButton onClick={this.saveCapture}>Save</CustomButton> 
                                    <CustomButton onClick={browseFiles}>Retry</CustomButton> 
                                    <CustomButton onClick={this.closeAll}>Cancel</CustomButton> 
                                </div> :
                                <CustomButton onClick={browseFiles} >Upload</CustomButton> }
                    </>
                )}
            </Files>
        )
    }
}

export default DocumentUploader;