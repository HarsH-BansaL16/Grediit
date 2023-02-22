import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Grid } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import { TextField, Button } from '@mui/material'
import { BrowserView, MobileView } from 'react-device-detect'
import axios from 'axios'
import './SignUp.css'

const FORM_VALIDATION = Yup.object({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  userName: Yup.string().required('Required'),
  email: Yup.string().required('Required').email('Invalid Email'),
  age: Yup.number()
    .required('Required')
    .integer()
    .typeError('Enter a Valid Age'),
  contactNumber: Yup.number()
    .required('Required')
    .integer()
    .typeError('Enter a Valid Phone Number'),
  password: Yup.string().required('Required'),
  confirmPassword: Yup.string().required('Required'),
})

function SignUp(props) {
  const Navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      age: '',
      contactNumber: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: FORM_VALIDATION,
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = formik.values
    try {
      if (data.password == data.confirmPassword) {
        const url = 'http://localhost:4000/api/users'
        const { data: res } = await axios.post(url, data)
        console.log(res.message)
        alert(res.message)
        Navigate('/login')
      } else {
        alert('Passwords do not Match!')
      }
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        console.log(error.response.data.message)
        alert(error.response.data.message)
      }
    }
  }

  return (
    <>
      <BrowserView>
        <form style={{ width: '25vw' }} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <span> SignUp </span>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label='First Name'
                name='firstName'
                fullWidth='true'
                variant='outlined'
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label='Last Name'
                name='lastName'
                fullWidth='true'
                variant='outlined'
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='User Name'
                name='userName'
                fullWidth='true'
                variant='outlined'
                value={formik.values.userName}
                onChange={formik.handleChange}
                error={
                  formik.touched.userName && Boolean(formik.errors.userName)
                }
                helperText={formik.touched.userName && formik.errors.userName}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Email'
                name='email'
                fullWidth='true'
                variant='outlined'
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label='Age'
                name='age'
                fullWidth='true'
                variant='outlined'
                value={formik.values.age}
                onChange={formik.handleChange}
                error={formik.touched.age && Boolean(formik.errors.age)}
                helperText={formik.touched.age && formik.errors.age}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label='Phone Number'
                name='contactNumber'
                fullWidth='true'
                variant='outlined'
                value={formik.values.contactNumber}
                onChange={formik.handleChange}
                error={
                  formik.touched.contactNumber &&
                  Boolean(formik.errors.contactNumber)
                }
                helperText={
                  formik.touched.contactNumber && formik.errors.contactNumber
                }
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Password'
                name='password'
                fullWidth='true'
                variant='outlined'
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Confirm Password'
                name='confirmPassword'
                fullWidth='true'
                variant='outlined'
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                error={
                  formik.touched.confirmPassword &&
                  Boolean(formik.errors.confirmPassword)
                }
                helperText={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                }
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant='standard' type='submit' className='submitButton'>
                Submit
              </Button>
              <br />
              <Button
                variant='standard'
                style={{ marginTop: '40px' }}
                onClick={() => props.onFormSwitch('login')}
              >
                Already have an account! Login here.
              </Button>
            </Grid>
          </Grid>
        </form>
      </BrowserView>
      <MobileView>
        <form style={{ width: '60vw' }} onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <span> SignUp </span>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label='First Name'
                name='firstName'
                fullWidth='true'
                variant='outlined'
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label='Last Name'
                name='lastName'
                fullWidth='true'
                variant='outlined'
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='User Name'
                name='userName'
                fullWidth='true'
                variant='outlined'
                value={formik.values.userName}
                onChange={formik.handleChange}
                error={
                  formik.touched.userName && Boolean(formik.errors.userName)
                }
                helperText={formik.touched.userName && formik.errors.userName}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Email'
                name='email'
                fullWidth='true'
                variant='outlined'
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label='Age'
                name='age'
                fullWidth='true'
                variant='outlined'
                value={formik.values.age}
                onChange={formik.handleChange}
                error={formik.touched.age && Boolean(formik.errors.age)}
                helperText={formik.touched.age && formik.errors.age}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label='Phone Number'
                name='contactNumber'
                fullWidth='true'
                variant='outlined'
                value={formik.values.contactNumber}
                onChange={formik.handleChange}
                error={
                  formik.touched.contactNumber &&
                  Boolean(formik.errors.contactNumber)
                }
                helperText={
                  formik.touched.contactNumber && formik.errors.contactNumber
                }
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Password'
                name='password'
                fullWidth='true'
                variant='outlined'
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Confirm Password'
                name='confirmPassword'
                fullWidth='true'
                variant='outlined'
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                error={
                  formik.touched.confirmPassword &&
                  Boolean(formik.errors.confirmPassword)
                }
                helperText={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                }
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant='standard'
                type='submit'
                className='submitButton'
                onClick={() => props.onFormSwitch('login')}
              >
                Submit
              </Button>
              <Button variant='standard'>
                Already have an account! Login here.
              </Button>
            </Grid>
          </Grid>
        </form>
      </MobileView>
    </>
  )
}

export default SignUp
