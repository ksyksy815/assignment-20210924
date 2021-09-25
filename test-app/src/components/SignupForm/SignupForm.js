import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './SignupForm.style.css'
import BasicButton from '../Button/BasicButton'
import requestSignUp from '../../pages/SignUp/SignUpAPI'

export default function SignupForm() {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const [mobile, setMobile] = useState('')

  const checkEmailValidity = (email) => {
    console.log("오니?: checkEmailValidity 안")
    const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/ig

    if (emailRegex.test(email) === false) return false;
    return true
  }

  const checkPasswordValidity = (password) => {
    if ( password.length < 8 || password.length > 15) {
      return false
    } else {
      return true
    }
  }

  // 회원가입: 가입하기 버튼 클릭 시
  const handleSubmit = async (e) => {
    e.preventDefault()

    // 비밀번호 유효성 체크
    if (!checkPasswordValidity(password)) {
      alert("비밀번호는 8~15자여야 합니다.")
      e.target[1].focus()
    }

    // 비밀번호 확인 불일치 여부 체크
    else if (password !== passwordCheck) {
      alert("비밀번호가 일치하지 않습니다.")
      e.target[2].focus()
    }

    // 모든 필드 유효성 체크 완료 시 API 요청 & 서비스 페이지로 이동
    else {
      const token = await requestSignUp ({ email, password, mobile })
      // 전역 상태에 토큰 넣어주기
      console.log(token)

      history.push('/')
    }
  }

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

  const handleEmailInvalidity = (e) => {
    // 유효하지 않은 경우, 이메일 확인 Alert 후 이메일 필드로 커서 이동 
    alert("이메일을 확인해주세요.")
    e.target.focus()
  }

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
          onInvalid={handleEmailInvalidity}
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
