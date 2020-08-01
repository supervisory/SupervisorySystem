import React from 'react'
import './loadBlock.css'

class LoadBlock extends React.Component {

    handleClick1 = (e) => {
        e.preventDefault()
        alert('foi trolado hahaha')
    }

    handleClick = () => {
        window.location.href ='/firstChart'
    }

    render () {
        return (
            <div className='content'>
                <button type='submit' className='buttonLoadBlock' onClick={this.handleClick}>
                    <div className='componentLoadBlock'>
                        <p>Bloco de carga: 022-7</p>
                    </div>
                </button>
            </div>
        )
    }
}

export default LoadBlock