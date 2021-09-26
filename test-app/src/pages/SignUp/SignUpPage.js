import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updateCurrentPage } from '../../actions'
import SignupForm from '../../components/SignupForm/SignupForm'
import './SignUpPage.style.css'

export default function SignUpPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateCurrentPage('회원가입'))
  }, [dispatch])

  return (
    <div id="signup-page">
      <h1>회원가입</h1>
      <SignupForm />
    </div>
  )
}
