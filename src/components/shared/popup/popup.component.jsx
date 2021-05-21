import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';

const Popup = ({popupOpen, title, children, cancel}) => {
  return (
    <div>
      <Dialog open={popupOpen} onClose={cancel??undefined} aria-labelledby="form-dialog-title">
        {title?<DialogTitle id="form-dialog-title">{title}</DialogTitle>:null}
        <DialogContent>
          {children}
        </DialogContent>
      </Dialog>
    </div>
  );
}


export default Popup;