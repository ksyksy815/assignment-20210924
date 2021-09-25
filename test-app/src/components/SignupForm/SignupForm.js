import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../actions/index'
import './form.style.css'
import BasicButton from '../Button/BasicButton'
import requestSignUp from '../../pages/SignUp/signUpAPI'

export default function SignupForm() {
  const history = useHistory()
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const [mobile, setMobile] = useState('')

  // 이메일 유효성 체크
  const checkEmailValidity = (email) => {
    const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/ig

    if (emailRegex.test(email) === false) return false;
    return true
  }

  // 이메일이 유효하지 않은 경우 alert
  const promptAlert = (e) => {
    alert("이메일을 확인해주세요.")
    e.target.focus()
  }

  // 비밀번호 유효성 체크
  const checkPasswordValidity = (password) => {
    if ( password.length < 8 || password.length > 15) return false;
    return true
  }

  // 가입하기 버튼 클릭 시
  const handleSubmit = async (e) => {
    e.preventDefault()

    // 비밀번호 유효성 체크 여부에 따른 alert
    if (!checkPasswordValidity(password)) {
      alert("비밀번호는 8~15자여야 합니다.")
      e.target[1].focus()
    }

    // 비밀번호 확인 불일치 여부 체크 alert
    else if (password !== passwordCheck) {
      alert("비밀번호가 일치하지 않습니다.")
      e.target[2].focus()
    }

    // 모든 필드 유효성 체크 완료 시 API 요청 & 서비스 페이지로 이동
    else {
      const token = await requestSignUp ({ email, password, mobile })
      
      // 전역 상태에 토큰 넣어주기
      dispatch(login(token))

      // 서비스 페이지로 이동
      history.push('/')
    }
  }

  // 인풋 필드값 변경 반영
  const handleChange = (e) => {
    switch (e.target.id) {
      case 'email':
        setEmail(e.target.value)
        break;
      case 'password':
        setPassword(e.target.value)

        //유효성 체크: 유효하지 않은 경우 input 태두리 빨간색으로 변경
        if (!checkPasswordValidity(password)) {
          e.target.style.border = 'red 3px solid'
        } else {
          e.target.style.border = ''
        }
        break;
      case 'password-check':
        setPasswordCheck(e.target.value)
        break;
      case 'phone':
        setMobile(e.target.value)
        break;
      default: return;
    }
  }

  // 이메일 필드 focus out 일 떄 유효성 확인 후 보더 변경
  const handleOnFocusOut = (e) => {
    if (!checkEmailValidity(email)) {
      e.target.style.border = '3px solid red'
    } else {
      e.target.style.border = ''
    }
  }

  return (
    <form id="signup-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">이메일</label>
        <input 
          type="email" 
          id="email" 
          autoComplete="off" 
          onChange={handleChange}
          onBlur={handleOnFocusOut}
          onInvalid={promptAlert}
        />
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <input 
          type="password" 
          id="password" 
          maxLength="15" 
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password-check">비밀번호 확인</label>
        <input 
          type="password" 
          id="password-check" 
          maxLength="15"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phone">연락처</label>
        <input 
          type="tel" 
          id="phone" 
          pattern="010\d{3,4}\d{4}" 
          title="형식: 010########"
          onChange={handleChange}
        />
      </div>
      <BasicButton content="가입하기" />
    </form>
  )
}
