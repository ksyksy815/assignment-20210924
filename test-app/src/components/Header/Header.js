import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Header.style.css'
import logo from '../../assets/logo.png'
import HeaderMenu from './HeaderMenu'

export default function Header() {
  const loginStatus = useSelector(state => state.loginStatusReducer.user.login)

  return (
    <header>
      <div>
        <Link to='/'><img src={logo} alt="logo"/></Link>
      </div>
      <nav>
        <ul>
          <HeaderMenu url="/" menuTitle="서비스" />
          {
            loginStatus ?
            <HeaderMenu url="/mypage/order" menuTitle="마이페이지" /> :
            <HeaderMenu url="/sign-up" menuTitle="회원가입" />
          }
          {
            loginStatus ?
            <HeaderMenu url="/logout" menuTitle="로그아웃" /> :
            <HeaderMenu url="/login" menuTitle="로그인" />
          }
        </ul>
      </nav>
    </header>
  )
}
