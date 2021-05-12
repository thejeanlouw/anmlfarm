import React from 'react';
import './simple-action-page.styles.scss'

const SimpleActionPage = (
    {
        children
    }) => {
        return (
            <div className='simple-action-page'>
                <div className='action-card'>
                    <div className='action-card-container'>
                        {children? children : null}
                    </div>
                </div>
            </div>
)}

export default SimpleActionPage;