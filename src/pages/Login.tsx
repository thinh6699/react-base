import { ErrorMessage } from '@hookform/error-message'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { handleToken, setTokenNull } from '../stores/Token'
import FacebookLogin from 'react-facebook-login'
import { saveUserInfo, setLoginDefault } from '../stores/UserInfo'
import { store } from '../apps/store'
import GoogleLogin from 'react-google-login'
import { gapi } from 'gapi-script'

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const { t } = useTranslation()
  const randomState = Math.random().toString(36).substr(5, 9)
  const redirectUrl = window.location.origin + '/line-login'
  const lineUrl = `https://access.line.me/oauth2/v2.1/authorize?client_id=${process.env.REACT_APP_LINE_CLIENT_ID}&scope=openid+profile+email&state=${randomState}&response_type=code&redirect_uri=${redirectUrl}`
  const from = (location.state as any)
    ? (location.state as any).from.pathname
    : '/'
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    criteriaMode: 'all',
    mode: 'onSubmit',
    defaultValues: {
      username: '',
      password: ''
    }
  }) // define validation
  const usernameValidate = {
    ...register('username', {
      required: 'Username is required'
    })
  }
  const passwordValidate = {
    ...register('password', {
      required: 'Password is required',
      minLength: {
        value: 3,
        message: 'Password must be at least 3 letters'
      }
    })
  }

  useEffect(() => {
    dispatch(setTokenNull())
    const isLoginFB = store.getState().userInfo?.isLoginFB
    if (isLoginFB) {
      sessionStorage.clear()
      dispatch(setLoginDefault())
    }

    const start = () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: 'profile email'
      })
    }
    gapi.load('client:auth2', start)
  })

  const login = (data: any) => {
    const userInfo = {
      name: 'Thinh',
      image:
        'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000'
    }
    dispatch(handleToken('ey12456abcd789'))
    dispatch(saveUserInfo(userInfo))
    navigate(from)
  }

  const loginWithFacebook = (response: any) => {
    window.FB.getLoginStatus((res: any) => {
      if (res.status === 'connected') {
        const userInfo = {
          name: response.name,
          image: response.picture.data.url,
          isLoginFB: true
        }
        dispatch(handleToken(response.accessToken))
        dispatch(saveUserInfo(userInfo))
        navigate(from)
      }
    })
  }

  const responseGoogle = (response: any) => {
    if (response.accessToken) {
      const userInfo = {
        name: response.profileObj.givenName,
        image: response.profileObj.imageUrl,
        isLoginGoogle: true
      }
      dispatch(handleToken(response.accessToken))
      dispatch(saveUserInfo(userInfo))
      navigate(from)
    }
  }

  return (
    <div className='login mw--100 mx-auto'>
      <h2 className='my-10 text-center'>{t('auth.login_form')}</h2>
      <div className='login-form'>
        <div className='user-field mb-4'>
          <label htmlFor='userName' className='fw-500 mb-1 ps-1'>
            Username
          </label>
          <input
            id='userName'
            type='text'
            className='form-control h--10'
            placeholder='Username'
            {...usernameValidate}
          />
          <ErrorMessage
            errors={errors}
            name='username'
            render={({ messages }) => {
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <p className='text-danger' key={type}>
                      {message}
                    </p>
                  ))
                : null
            }}
          />
        </div>

        <div className='password-field mb-4'>
          <label htmlFor='password' className='fw-500 mb-1 ps-1'>
            Password
          </label>
          <input
            id='password'
            type='password'
            className='form-control h--10'
            placeholder='Password'
            {...passwordValidate}
          />
          <ErrorMessage
            errors={errors}
            name='password'
            render={({ messages }) => {
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <p className='text-danger' key={type}>
                      {message}
                    </p>
                  ))
                : null
            }}
          />
        </div>

        <div className='flex-center mb-5'>
          <button
            onClick={handleSubmit(login)}
            className='btn btn-primary minw--25'
          >
            Login
          </button>
        </div>

        <div className='flex-center mb-5'>
          <FacebookLogin
            size='medium'
            appId='602116111535757'
            autoLoad={false}
            fields='name,email,picture'
            scope='public_profile'
            callback={loginWithFacebook}
            icon='fa-facebook'
          />
        </div>

        <div className='flex-center mb-5'>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}
            buttonText='Login'
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>

        <div className='flex-center w--53 mw-100 mx-auto'>
          <a
            href={lineUrl}
            className='btn btn-success w-100 px-3 py-2 fs-15 text-white rounded-5'
          >
            Login with line
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login
