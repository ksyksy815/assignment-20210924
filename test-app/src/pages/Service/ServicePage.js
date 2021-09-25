import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './ServicePage.style.css'
import officeImg from '../../assets/office.jpeg'
import BasicButton from '../../components/Button/BasicButton'


export default function ServicePage() {
  const history = useHistory()
  const loginStatus = useSelector (state => state.loginStatusReducer.user.login)

  // 토큰 있는 경우
  const handleOrderSuccess = () => {
    alert("주문이 성공적으로 완료되었습니다.")
  }

  // 토큰 없는 경우
  const promptLoginAlert = () => {
    alert("로그인이 필요한 서비스입니다.")
    history.push('/sign-up')
  }

  return (
    <div id="service-page">
      <img src={officeImg} alt="Office"/>
      {
        loginStatus ? 
        <BasicButton content={"신청하기"} callBack={handleOrderSuccess}/> :
        <BasicButton content={"주문하기"} callBack={promptLoginAlert}/>
      }
    </div>
  )
}
