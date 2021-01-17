import React from 'react';
import FingerButton from '../../components/finger-button/fingerbutton.component';
import FoldbackButton from '../../components/foldback-button/foldback-button.component';
import './simple-info-page.styles.css'

const SimpleInfoPage = (
    {
        backClickCallback, 
        nextClickCallback,
        mainImageSource,
        cardHeading,
        cardBody
    }) => {
        console.log(backClickCallback);
        console.log(nextClickCallback);
        console.log(mainImageSource());
        console.log(cardHeading());
        console.log(cardBody());
        return (
            <div className='simple-info-page'>
                <div className='spacer-horizontal'>
                    <div className='spacer-vertical' />
                </div>
                <div className='main-horizontal'>
                    <div className='spacer-vertical' />
                    <div className='info-card'>
                        <FoldbackButton callback={backClickCallback} />
                        <img className='main-image' src={mainImageSource()} alt={mainImageSource()}/>
                        <h1 className='card-heading'>{cardHeading()}</h1>
                        <p className='card-body'>{cardBody()}</p>
                        <FingerButton callback={nextClickCallback} />
                    </div>
                    <div className='spacer-vertical' />
                </div>
                <div className='spacer-horizontal'>
                    <div className='spacer-vertical' />
                </div>
            </div>
)}

export default SimpleInfoPage;