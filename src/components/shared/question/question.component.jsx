import React, { Component } from 'react'

export default class Question extends Component {

    

    render() {
        return (
            <div className='question-page'>
                <div className='question-image'>
                    {this.props.imageUrl? 
                    <img src={this.props.imageUrl} />}

                </div>
            </div>
        )
    }
}
