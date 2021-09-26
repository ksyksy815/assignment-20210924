import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updateCurrentPage } from '../../actions'
import LoginForm from '../../components/LoginForm/LoginForm'
import './LoginPage.style.css'

export default function LoginPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateCurrentPage('로그인'))
  }, [dispatch])

  return (
    <div id="login-page">
      <LoginForm />
    </div>
  )
}
