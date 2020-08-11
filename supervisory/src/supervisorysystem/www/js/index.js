import React from 'react'
import ReactDOM from 'react-dom'
import App from '../../../components/app/App'

document.addEventListener('root', onDeviceReady, false)

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version)

    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root').classList.add('ready')
    )
}
