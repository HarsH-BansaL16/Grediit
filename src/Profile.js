import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Profile.css'
import SideBar from './sidebar'
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from 'mdb-react-ui-kit'
import Lottie from 'react-lottie'

import * as location from './Loading.json'
import * as success from './Success.json'

const locationDefaultOptions = {
  loop: true,
  autoplay: true,
  animationData: location.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const successDefaultOptions = {
  loop: true,
  autoplay: true,
  animationData: success.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

function Profile() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(undefined)
  const [completed, setCompleted] = useState(undefined)

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
          console.log(json)
          setData(json)
          setLoading(true)

          setTimeout(() => {
            setCompleted(true)
          }, 1000)
        })
    }, 2000)
  }, [])

  const Navigate = useNavigate()

  var loggedIn = localStorage.getItem('isLoggedIn?')

  useEffect(() => {
    if (loggedIn == null) {
      Navigate('/login')
    }
  }, [])

  return (
    <>
      {!completed ? (
        <div
          style={{ position: 'absolute', top: '35%', left: 'calc(50% - 50px)' }}
        >
          {!loading ? (
            <Lottie options={locationDefaultOptions} height={150} width={150} />
          ) : (
            <Lottie options={successDefaultOptions} height={120} width={120} />
          )}
        </div>
      ) : (
        <>
          <div id='App'>
            <SideBar pageWrapId={'page-wrap'} outerContainerId={'App'} />
            <div
              className='vh-100'
              style={{ backgroundColor: '#9de2ff', textAlign: 'center' }}
            >
              <MDBContainer>
                <MDBRow className='justify-content-center'>
                  <MDBCol md='9' lg='7' xl='5' className='mt-5'>
                    <MDBCard style={{ borderRadius: '15px' }}>
                      <MDBCardBody className='p-4'>
                        <div className='d-flex text-black'>
                          <div className='flex-shrink-0'>
                            <MDBCardImage
                              style={{ width: '180px', borderRadius: '10px' }}
                              src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
                              alt='Generic placeholder image'
                              fluid
                            />
                          </div>
                          <div className='flex-grow-1 ms-3'>
                            <MDBCardTitle>Danny McLoan</MDBCardTitle>
                            <MDBCardText>Senior Journalist</MDBCardText>

                            <div
                              className='d-flex justify-content-start rounded-3 p-2 mb-2'
                              style={{ backgroundColor: '#efefef' }}
                            >
                              <div>
                                <p className='small text-muted mb-1'>
                                  Following
                                </p>
                                <p className='mb-0'>41</p>
                              </div>
                              <div className='px-3'>
                                <p className='small text-muted mb-1'>
                                  Followers
                                </p>
                                <p className='mb-0'>976</p>
                              </div>
                            </div>
                            <div className='d-flex pt-1'>
                              <MDBBtn outline className='me-1 flex-grow-1'>
                                Chat
                              </MDBBtn>
                              <MDBBtn className='flex-grow-1'>Follow</MDBBtn>
                            </div>
                          </div>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Profile
