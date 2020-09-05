import React from 'react'
import './auth.css'
import firebase from 'firebase'
import logoITT from '../../imgs/logoITT.png'

export const isAuthenticated = () => true

class Auth extends React.Component {

  auth = undefined
  config = undefined

  constructor(){  
    super()
    this.authenticate = this.authenticate.bind(this)

    this.config = {
      apiKey: 'AIzaSyCcfjoCu8YRXIwdtJdiSk31lPeUtokXVAo',
      authDomain: 'app-itt-supevisory-system.firebaseapp.com',
      databaseURL: 'https://app-itt-supevisory-system.firebaseio.com',
      projectId: 'app-itt-supevisory-system',
      storageBucket: 'app-itt-supevisory-system.appspot.com',
      messagingSenderId: '435543890935',
      appId: '1:435543890935:web:b602c4ab00eb0e843f2cf2',
      measurementId: 'G-CS68P9D2RS'
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
    // this.auth = firebase.auth()

    firebase.auth().onAuthStateChanged((user) => {
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

    firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin).then(userSignIn => {
      this.setState({
        user: userSignIn
      })
      window.location.href ='/app'
      this.refs.email.value = ''
      this.refs.password.value = ''
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
        <div className='authContent'>
            <div>
              <label htmlFor='exampleInputEmail'>E-mail:</label>
              <input id='email' ref='email' id='exampleInputEmail'
                aria-aria-describedby='emailHelp' placeholder='email' onChange={this.handleChangeEmail} />
            </div>
            <div>
              <label htmlFor='exampleInputPassword'>Senha:</label>
              <input type='password' ref='password' id='exampleInpitPassword'
                placeholder='senha' onChange={this.handleChangePassword} />
            </div>
            <div>
              <button type='submit' onClick={this.authenticate} className='button'>Entrar</button>
            </div>
          </div>
      </div>
    )
  }
}

export default Auth