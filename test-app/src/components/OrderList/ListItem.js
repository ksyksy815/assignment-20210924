import React from 'react'
import { useHistory } from 'react-router-dom'

export default function ListItem({item}) {
  const history = useHistory()

  const handleItemClick = () => {
    const id = item.id
    history.push(`/mypage/order/${id}`)
  }

  return (
    <li onClick={handleItemClick}>
      <div>{item.id}</div>
      <div>{item.itemName}</div>
    </li>
  )
}
