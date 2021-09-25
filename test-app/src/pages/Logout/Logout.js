import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../actions/index'
import BasicButton from '../../components/Button/BasicButton'
import './Logout.style.css'

export default function Logout() {
  const dispatch = useDispatch()
  const history = useHistory()

  const goBackToMainPage = () => {
    history.push('/')
  }

  useEffect(() => {
    dispatch(logout())
  }, [dispatch])

  return (
    <div id="logout-page">
      <span>로그아웃에 성공했습니다.</span>
      <BasicButton content="홈으로 돌아가기" callBack={goBackToMainPage}/>
    </div>
  )
}
