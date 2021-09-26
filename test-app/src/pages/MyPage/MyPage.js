import { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import getOrderList from './orderListAPI'
import './MyPage.style.css'
import Pagination from '../../components/Pagination/Pagination'
import ListItem from '../../components/OrderList/ListItem'
import { updateCurrentPage } from '../../actions'

export default function MyPage() {
  const history = useHistory()
  const dispatch = useDispatch()

  const loginStatus = useSelector(state => state.loginStatusReducer.user.login)
  const [loading, setLoading] = useState(true)

  const [totalPs, setTotalPs] = useState(null)
  const [pageNumber, setPageNumber] = useState(null)
  const [contents, setContents] = useState(new Array(10))
  
  const getListByPage = useCallback( async (pageNumber) => {
    const {totalPages, currentPage, content} = await getOrderList(pageNumber)
    
    setTotalPs(totalPages)  
    setPageNumber(currentPage + 1)
    setContents(content)
    setLoading(false)
  }, [])

  useEffect(() => {
    if (!loginStatus) {
      alert("로그인이 필요한 서비스 입니다.")
      history.push('/login')
    }
  }, [loginStatus, history])

  useEffect(() => {
    dispatch(updateCurrentPage('마이페이지'))
  }, [dispatch])

  useEffect(() => {
    if (loginStatus) getListByPage(0);
  }, [getListByPage, loginStatus])

  return (
    <div id="mypage">
      <ul id="order-list">
        { !loading ?
          contents.map((item)=> <ListItem item={item} key={item.id}/> ) :
          [...new Array(10)].map((item, i)=> {
            return (
              <li key={i} className="order-list-skeleton">
                <div></div>
                <div></div>
              </li>
            )
          })
        }
      </ul>
      <Pagination 
        totalPage={totalPs} 
        currentPage={pageNumber}
        getListByPage={getListByPage}
        setLoading={setLoading}
      />
    </div>
  )
}
