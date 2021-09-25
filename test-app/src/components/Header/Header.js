import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Header.style.css'
import logo from '../../assets/logo.png'

export default function Header() {
  const token = useSelector(state => state.loginStatusReducer.user.token)
  const [login, setLogin] = useState(false)

  useEffect(() => {
    if (token !== '') setLogin(true);
    else setLogin(false)
  }, [token])

  return (
    <header>
      <div>
        <Link to='/'><img src={logo} alt="logo"/></Link>
      </div>
      <nav>
        <ul>
          <li><Link to='/'>서비스</Link></li>
          <li>
            {
              login ?
              <Link to='/mypage/order'>마이페이지</Link> :
              <Link to='/sign-up'>회원가입</Link>
            }
          </li>  
          <li>
            {
              login ?
              <Link to='/logout'>로그아웃</Link> :
              <Link to='/login'>로그인</Link>
            }
          </li>
        </ul>
      </nav>
    </header>
  )
}
