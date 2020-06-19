import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import * as firebase from 'firebase'
import logoITT from './imgs/logoITT.png'

class App extends Component {

  constructor(){
    super()
    this.authenticate = this.authenticate.bind(this)

    const config = {
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
      user: undefined
    }
  }

  componentDidMount() {
    firebase.initializeApp(this.config)
    const auth = firebase.auth()

    this.auth.onAuthStateChanged((user) => {
      if(user) {
        this.setState({
          user: user
        })
        // let displayName = user.displayName,
        //   email = user.email,
        //   emailVerified = user.emailVerified,
        //   photoURL = user.photoURL,
        //   isAnonymous = user.isAnonymous,
        //   uid = user.uid,
        //   providerData = user.providerData
        localStorage.setItem('firebase_auth', this.state.user)
      } else {
        this.setState({
          user: undefined
        })
        localStorage.removeItem('firebase_auth')
      }
    })
  }

  authenticate(e){
    e.preventDefault()

    this.auth.signInWithEmailAndPassword(this.refs.email.value, this.refs.password.value).then(userSignIn => {
      // this.setState({
      //   user: userSignIn
      // })
      console.log('user', userSignIn)
    }).catch(function(error) {
      let errorCode = error.Code,
        errorMessage = error.Message
      console.log(errorCode, '-', errorMessage)
    })
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
          </div>
          <div className='col-4'>
            <div className='container-fluid card-login'>
              <div className='card card-shadow'>
                <img className='card-img-top img-login align-self-center' src={logoITT} alt='ITT CHIP' />
                <div className='card-body'>
                  <form onSubmit={this.authenticate}>
                    <div className='form-group'>
                      <label htmlFor='exampleInputEmail'>Email</label>
                      <input id='email' ref='email' className='form-control' id='exampleInputEmail'
                        aria-aria-describedby='emailHelp' placeholder='email' />
                      <small id='emailHelp' className='form-text text-muted'>
                        Esse email é para a autenticação do firebase
                      </small>
                    </div>
                    <div className='form-group'>
                      <label htmlFor='exampleInputPassword'>Senha</label>
                      <input type='password' ref='password' className='form-control' id='exampleInpitPassword'
                        placeholder='senha' />
                    </div>
                    <button type='submit' className='btn btn-primary btn-block'>Entrar</button>
                    <small id='cardHelp' className='form-text text-muted text-center'>
                      React + Firebase
                    </small>
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
