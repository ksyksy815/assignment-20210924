import React from 'react'
import './ServicePage.style.css'
import officeImg from '../../assets/office.jpeg'
import BasicButton from '../../components/Button/BasicButton'


export default function ServicePage() {
  const handleClick = () => {
    // 토큰있는 경우
    
    // 토큰 없는 경우
  }

  return (
    <div id="service-page">
      <img src={officeImg} alt="Office"/>
      <BasicButton content={"주문하기"} callBack={handleClick}/>
    </div>
  )
}
