import { ErrorMessage } from '@hookform/error-message'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { handleToken, setTokenNull } from '../stores/Token'

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const { t } = useTranslation()
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
    // localStorage.clear()
  })

  const login = (data: any) => {
    const from = (location.state as any)
      ? (location.state as any).from.pathname
      : '/'
    dispatch(handleToken('ey12456abcd789'))
    navigate(from)
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

        <div className='flex-center'>
          <button
            onClick={handleSubmit(login)}
            className='btn btn-primary minw--25'
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
