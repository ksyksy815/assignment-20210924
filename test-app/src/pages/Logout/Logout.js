import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../actions/index'
import BasicButton from '../../components/Button/BasicButton'
import './Logout.style.css'

/*
제작해야하는 페이지 목록에 로그아웃 페이지가 있지 않았으나,
헤더에서 '로그아웃' 링크 시 /logout URL로 이동되어야 한다는 항목이 있어서 추가하였습니다.
*/

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
