import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function HeaderMenu( {url, menuTitle} ) {
  const aElement = useRef()
  const currentPage = useSelector(state => state.pageTrackingReducer.page.currentPage)

  useEffect(() => {
    if (menuTitle === currentPage) {
      aElement.current.style.color = "#fff"
      aElement.current.style.fontWieght = "bold"
    } else {
      aElement.current.style.color = "#bababa"
      aElement.current.style.fontWieght = "normal"
    }
  }, [menuTitle, currentPage])

  return (
    <li>
      <Link to={url} ref={aElement}>{ menuTitle }</Link>
    </li>
  )
}
