import './Pagination.style.css'

export default function Pagination({totalPage, currentPage, getListByPage, setLoading}) {
  // 페이지 넘버로 이동
  const changeToNewPage = (e) => {
    setLoading(true)
    const pageNumber = e.target.id
    if (currentPage !== pageNumber) {
      getListByPage(pageNumber-1)
    }
  }

  // Prev, next 이동
  const movePage = (e) => {
    if (e.target.textContent === 'Prev') {
      if (currentPage > 1) {
        setLoading(true)
        getListByPage(currentPage - 2)
      }
    } else if (e.target.textContent === 'Next') {
      if (currentPage !== totalPage) {
        setLoading(true)
        getListByPage(currentPage)
      }
    }
  }

  return (
    <ul id="pagination">
      <li 
        onClick={movePage} 
        className={currentPage === 1 ? "disabled" : null}
      >Prev</li>
      {
        [...new Array(totalPage)].map((el, i) => {
          const pageNumber = i + 1
          return (
            <li 
              key={pageNumber}
              id={pageNumber}
              className={currentPage === pageNumber ? "currentPage" : null}
              onClick={changeToNewPage}
            >
              {i + 1}
            </li>
          )
        })
      }
      <li 
        onClick={movePage}
        className={currentPage === totalPage ? "disabled" : null}
      >Next</li>
    </ul>
  )
}
