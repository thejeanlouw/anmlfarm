import React from 'react';
import FingerButton from '../../components/shared/finger-button/fingerbutton.component';
import FoldbackButton from '../../components/shared/foldback-button/foldback-button.component';
import './simple-info-page.styles.scss'

const SimpleInfoPage = (
    {
        backClickCallback, 
        nextClickCallback,
        mainImageSource,
        cardHeading,
        cardBody,
        children
    }) => {
        console.log(backClickCallback);
        console.log(nextClickCallback);
        console.log(mainImageSource);
        console.log(cardHeading);
        console.log(cardBody);

        const cardClick = (e) => {
            if(backClickCallback) return;
            else if (nextClickCallback) nextClickCallback();
        }

        return (
            <div className='simple-info-page'>
                
                    <div className='info-card' onClick={cardClick}>
                    {backClickCallback? <FoldbackButton callback={backClickCallback} /> : null}
                    {mainImageSource? 
                        <img 
                            className='main-image' 
                            src={mainImageSource} 
                            alt={mainImageSource}
                        /> : null }
                    {cardHeading ?
                        <h1 className='card-heading'>{cardHeading}</h1> : null }
                    {cardBody?
                        <p className='card-body'>{cardBody}</p> : null }
                    {children? {...children} : null}
                    {nextClickCallback? 
                        <FingerButton callback={nextClickCallback} /> : null}
                    </div>
                
            </div>
)}

export default SimpleInfoPage;