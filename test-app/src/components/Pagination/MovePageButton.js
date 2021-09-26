import React from 'react'

export default function MovePageButton( {content, movePage, currentPage, totalPage} ) {
  return (
    <li 
      onClick={movePage}
      className={currentPage === totalPage ? "disabled" : null}
    >
      {content}
    </li>
  )
}
