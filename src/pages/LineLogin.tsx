import axios, { AxiosResponse } from 'axios'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

function LineLogin() {
  const clientId = '1657415101'
  const secretId = 'eaf91e0bb448093234653ed74dbd0e3e'
  const randomState = Math.random().toString(36).substr(5, 9)
  const redirectUrl = window.location.origin + '/line-login'
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const data = new URLSearchParams()
    data.append('grant_type', 'authorization_code')
    data.append('code', searchParams.get('code') as string)
    data.append('redirect_uri', redirectUrl)
    data.append('client_id', clientId)
    data.append('client_secret', secretId)
    axios
      .post('https://api.line.me/oauth2/v2.1/token', data)
      .then((response: AxiosResponse) => {
        console.log(response)
      })
  }, [])
  return (
    <div>
      <p>Line login success</p>
      <div className='flex-center'>
        <button className='btn btn-primary'>Go to home</button>
      </div>
    </div>
  )
}

export default LineLogin
