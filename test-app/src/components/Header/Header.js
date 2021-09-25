import './Header.style.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function Header() {

  return (
    <header>
      <div>
        <Link to='/'><img src={logo} alt="logo"/></Link>
      </div>
      <nav>
        <ul>
          <li><Link to='/'>서비스</Link></li>
          <li><Link to='/sign-up'>회원가입</Link></li>  
          <li><Link to='/login'>로그인</Link></li>
        </ul>
      </nav>
    </header>
  )
}
