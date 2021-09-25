import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../actions/index'
import BasicButton from '../Button/BasicButton'
import requestLogIn from '../../pages/Login/loginAPI'

export default function LoginForm() {
  const history = useHistory()
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    switch (e.target.id) {
      case 'email':
        setEmail(e.target.value)
        break;
      case 'password':
        setPassword(e.target.value)
        break;
      default: return;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const token = await requestLogIn( { email, password } )
    
    if (token) {
      // 토큰 저장
      dispatch(login(token))
  
      // 서비스 페이지로 이동
      history.push('/')
    } else {
      // 비밀번호 확인 필요 얼럿
      alert('로그인에 실패했습니다. 비밀번호를 확인해주세요.')
      e.target[1].focus()
    }
  }

  return (
      loading ? <div className="loading-message">Logging In...</div> :
      <form onSubmit={handleSubmit}>
        <h1>로그인</h1>
        <div>
          <label htmlFor="email">이메일</label>
          <input 
            type = "email" 
            id = "email"
            autoComplete = "off"
            onChange = {handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input 
            type = "password" 
            id = "password" 
            maxLength = "15" 
            onChange = {handleChange}
          />
        </div>
        <BasicButton content="로그인"/>
      </form>
  )
}
