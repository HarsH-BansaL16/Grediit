import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import LandingPage from './LandingPage'
import Login from './Login'
import SignUp from './SignUp'
import Profile from './Profile'
import Error from './Error'
import Loader from './Loader'

function App() {
  const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route
          exact
          path='/login'
          element={
            <div className='App'>
              {currentForm == 'login' ? (
                <Login onFormSwitch={toggleForm} />
              ) : (
                <SignUp onFormSwitch={toggleForm} />
              )}
            </div>
          }
        />
        <Route exact path='/profile' element={<Profile />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}
// <Navigate to='/' replace />

export default App
