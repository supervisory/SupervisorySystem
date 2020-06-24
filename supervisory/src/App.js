import React, { Component, useRef } from 'react'
import logo from './logo.svg'
import './App.css'
import * as firebase from 'firebase'
import logoITT from './imgs/logoITT.png'

class App extends Component {

  auth = undefined
  config = undefined

  constructor(){  
    super()
    this.authenticate = this.authenticate.bind(this)

    this.config = {
      apiKey: "AIzaSyCcfjoCu8YRXIwdtJdiSk31lPeUtokXVAo",
      authDomain: "app-itt-supevisory-system.firebaseapp.com",
      databaseURL: "https://app-itt-supevisory-system.firebaseio.com",
      projectId: "app-itt-supevisory-system",
      storageBucket: "app-itt-supevisory-system.appspot.com",
      messagingSenderId: "435543890935",
      appId: "1:435543890935:web:b602c4ab00eb0e843f2cf2",
      measurementId: "G-CS68P9D2RS"
    }

    this.state = {
      user: null,
      emailLogin: null,
      passwordLogin: null,
      displayName: null,
      email: null,
      emailVerified: null,
      photoURL: null,
      isAnonymous: null,
      uid: null,
      providerData: null
    }
  }

  componentDidMount() {
    firebase.initializeApp(this.config)
    this.auth = firebase.auth()

    this.auth.onAuthStateChanged((user) => {
      if(user) {
        this.setState({
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          photoURL: user.photoURL,
          isAnonymous: user.isAnonymous,
          uid: user.uid,
          providerData: user.providerData
        })
        localStorage.setItem('firebase_auth', this.state.user)
      } else {
        this.setState({
          user: undefined
        })
        localStorage.removeItem('firebase_auth')
      }
    })
  }

  authenticate = (e) => {
    e.preventDefault()

    const { emailLogin, passwordLogin } = this.state

    this.auth.signInWithEmailAndPassword(emailLogin, passwordLogin).then(userSignIn => {
      this.setState({
        user: userSignIn
      })
      console.log('state', this.state)
    }).catch((error) => {
      let errorCode = error.Code,
        errorMessage = error.Message
      console.log(errorCode, '-', errorMessage)
    })
  }

  handleChangeEmail = (event) => {
    this.setState({
      emailLogin: event.target.value
    })
  }

  handleChangePassword = (event) => {
    this.setState({
      passwordLogin: event.target.value
    })
  }

  render() {
    return (
      <div className='content'>
        <div className='row'>
          <div className='col-4'>
          </div>
          <div className='col-4'>
            <div className='container-fluid card-login'>
              <div className='card'>
                <img align='center' className='logoImg' src={logoITT} alt='ITT CHIP' />
                <div className='cardBody'>
                  <form onSubmit={this.authenticate}>
                    <div className='form-group'>
                      <label htmlFor='exampleInputEmail'>Email</label>
                      <input id='email' ref='email' className='form-control' id='exampleInputEmail'
                        aria-aria-describedby='emailHelp' placeholder='email' onChange={this.handleChangeEmail} />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='exampleInputPassword'>Senha</label>
                      <input type='password' ref='password' className='form-control' id='exampleInpitPassword'
                        placeholder='senha' onChange={this.handleChangePassword} />
                    </div>
                    <button type='submit' className='enter'>Entrar</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className='col-4'>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
